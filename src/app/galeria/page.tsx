import { Template, ImageCard } from '@/components'

export default function GaleriaPage() {
    return (
        <Template>
            <section className="grid grid-cols-4 gap-8">
                <ImageCard dataUpload='26/01/2024'tamanho='320MB'nome='Imagem 1' src='https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg' />
                <ImageCard dataUpload='26/01/2024'tamanho='320MB'nome='Imagem 2' src='https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg' />
                <ImageCard dataUpload='26/01/2024'tamanho='320MB'nome='Imagem 3' src='https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg' />
                <ImageCard dataUpload='26/01/2024'tamanho='320MB'nome='Imagem 4' src='https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg' />     
                <ImageCard dataUpload='26/01/2024'tamanho='320MB'nome='Imagem 4' src='https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg' />     
            </section>

        </Template>
    )
}