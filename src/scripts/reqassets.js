import { importAll } from './my_functions';

// importAll(require.context('../assets/fonts', true, /\.(woff|woff2|ttf|eot)$/));
importAll(require.context('../assets/files', true, /\.(7z|zip|rar)$/));
importAll(require.context('../assets/images', true, /\.(svg|png|jpe?g|gif|webp)$/));
importAll(require.context('../assets/videos', true, /\.(mp4|mov|flv)$/));
importAll(require.context('../assets/icons', true, /\.ico$/));