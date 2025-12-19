import { Orientation } from '@appium/types';
import { NovaWindows2Driver } from '../driver';
import { getDisplayOrientation } from '../winapi/user32';

export function getOrientation(this: NovaWindows2Driver): Orientation {
    return getDisplayOrientation();
}
