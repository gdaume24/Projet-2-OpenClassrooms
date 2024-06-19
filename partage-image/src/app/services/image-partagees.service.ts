import { Injectable } from "@angular/core";
import { ImagePartagee } from "../models/image-partagee";

@Injectable({
    providedIn: 'root'
})

export class ImagePartageesService {
    private imagePartagees: ImagePartagee[] = [
        new ImagePartagee(
            'Archibald est revenu',
            'Mon meilleur ami depuis toujours !',
            "https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/08/image-url-3.jpg",
            new Date(),
            256
        ),
        new ImagePartagee(
            'Camille est revenu',
            'Mon meilleur ennemi depuis toujours !',
            "https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/08/image-url-3.jpg",
            new Date(),
            10,
        ).withLocation("à la mer"),
        new ImagePartagee(
            'Crème est revenu',
            'Mon meilleur blablabla depuis toujours !',
            "https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/08/image-url-3.jpg",
            new Date(),
            15
        ),
    ];

    getImagePartagees(): ImagePartagee[] {
        return [...this.imagePartagees];
    }
}