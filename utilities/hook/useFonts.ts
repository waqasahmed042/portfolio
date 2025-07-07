import { Raleway, Rubik, Roboto } from 'next/font/google';

export const raleway = Raleway({
    subsets: ["latin"],
});

export const rubik = Rubik({
    subsets: ['latin'],
    weight: ['500'],
});

export const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500"],
});