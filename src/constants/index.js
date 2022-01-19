import { StatusBar, Platform, Dimensions } from "react-native";
import { version } from "../../package.json";

const VERSION = version;
const ADimensions = Dimensions.get("window");
const RATIO = (ADimensions.height / ADimensions.width);
const IS_SMART_PHONE = () => (RATIO > 1.7777)

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const FONT_FAMILY_BOLD = 'Poppins-Bold';
const FONT_FAMILY_MEDIUM = 'Poppins-Medium';
const FONT_FAMILY_LIGHT = 'Poppins-Light';
const FONT_FAMILY_ULTRALIGHT = 'Poppins-Thin';
const FONT_FAMILY_NORMAL = "Poppins-Regular";


const FONT_SIZE_XLARGE = IS_SMART_PHONE() ? 16 : 17.5;
const FONT_SIZE_LARGE = IS_SMART_PHONE() ? 14.5 : 15.5;
const FONT_SIZE_NORMAL = IS_SMART_PHONE() ? 12.5 : 14;
const FONT_SIZE_SMALL = IS_SMART_PHONE() ? 11.5 : 10;
const FONT_SIZE_XSMALL = IS_SMART_PHONE() ? 10 : 9;

const SIZE_ICON = 25
const REMOTE_CHANNEL_ID = "rm-channel-notification";

export default {
    REMOTE_CHANNEL_ID,
    VERSION,

    FONT_FAMILY_BOLD,
    FONT_FAMILY_MEDIUM,
    FONT_FAMILY_LIGHT,
    FONT_FAMILY_ULTRALIGHT,
    FONT_FAMILY_NORMAL,

    FONT_SIZE_XLARGE,
    FONT_SIZE_LARGE,
    FONT_SIZE_NORMAL,
    FONT_SIZE_SMALL,
    FONT_SIZE_XSMALL,

    IS_SMART_PHONE,
    RATIO,
    STATUSBAR_HEIGHT,
    SIZE_ICON    
}