import { remote } from 'webdriverio';

const capabilities = {
    platformName: 'Windows',
    'appium:automationName': 'NovaWindows2',
    'appium:app': 'Root',
    'appium:shouldCloseApp': true,
};

const options = {
    hostname: '127.0.0.1',
    port: 4723,
    logLevel: 'error',
    capabilities,
};

async function benchmark() {
    console.log('Creating session for benchmark...');
    const client = await remote(options);
    console.log('Session created.');

    try {
        console.log('Starting benchmark for powershell...');
        const start = Date.now();
        const process = await client.execute('powerShell', 'Get-Process');
        console.log(process);
        const end = Date.now();
        console.log(`Time taken: ${end - start}ms`);
    } catch (error) {
        console.error('Benchmark failed:', error);
    } finally {
        await client.deleteSession();
        console.log('Session deleted.');
    }
}

benchmark().catch(console.error);
