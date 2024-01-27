import { get } from 'http';
import { Image } from './image.resource'

class ImageService {
    baseUrl: string = 'http://localhost:8080/v1/images';

    async buscar(): Promise<Image[]> {
        const response = await fetch(this.baseUrl);
        return await response.json();
    }
}

export const useImageService = () => new ImageService();
