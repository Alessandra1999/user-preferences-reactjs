import { useContext } from "react";
import { UserPreferencesContext } from "./UserPreferencesContext";
import './ItemList.css';

const items = [
    'Killua Zaoldyeck ou Zoldyck (キ ル ア = ゾ ル デ ィ ッ ク, Kirua Zorudikku) é um dos quatro protagonistas de Hunter × Hunter, um menino de 14 anos. É o terceiro filho dos cinco da famosa família de assassinos Zaoldyeck. É o melhor amigo de Gon, que conheceu durante o Exame Hunter 287.',
    'Kurapika (ク ラ ピ カ, Kurapika) é um dos quatro protagonistas de Hunter × Hunter. Ele é o último sobrevivente da tribo Kuruta. Ele foi líder da organização fundada por Light Nostrade, bem como um Blacklist Hunter e agora um membro dos zodíacos, com o codinome "Rato", substituindo Pariston Hill.',
    'Gon Freecss (ゴン=フリークス, Gon Furīkusu) é o protagonista de Hunter x Hunter. Resoluto a fim de encontrar seu pai, Ging Freecss, o jovem tornou-se um Hunter.',
    'Leorio Paradinight (レ オ リ オ = パ ラ デ ィ ナ イ ト, Reorio Paradinaito) é apresentado como um dos personagens principais de Hunter x Hunter durante a primeira saga. Leorio se mostra ser o mais brincalhão do seu grupo de amigos. É um Hunter novato e um estudante de medicina.',
    'Isaac Netero (アイザック＝ネテロ, Aizakku Netero) foi o décimo segundo presidente da Associação Hunter e mestre da escola de artes marciais Shingen. Ele é um dos personagens mais antigos e mais poderosos.',
    'Kait (カイト, Kaito) é o primeiro hunter introduzido à história. Ele é discípulo de Ging Freecss, pai de Gon Freecss. Depois de salvar Gon de um Urso-Raposa na Ilha da Baleia, Kaito revela a Gon a verdade sobre seu pai. Antes de Kaito ir embora, ele entega a licença Hunter de Ging para Gon.',
    'Neferpitou  (ネフェルピトー, Neferupitō), apelidada de Pitou  (ピトー, Pitō), era uma Formiga Quimera com traços de gato humanoide e a primogênita dos Três Guardas Reais do Rei das Formigas Quimera, e serviu como um dos antagonistas do arco das Formigas Quimera.',
    'Kuroro Lúcifer ou Chrollo Lucilfer é o líder do Genei Ryodan, notório grupo de criminosos classe A. Sua principal habilidade é roubar habilidades de outros e armazenar em um livro que ele materializa, chamado Caçador de Habilidades. A vítima do roubo não consegue usar mais sua habilidade.'
];

const ItemList = () => {
    const { viewMode } = useContext(UserPreferencesContext);

    return (
        <div className={viewMode}>
            {items.map((item, index) => (
                <div key={index} className="item">
                    {item}
                </div>
            ))}
        </div>
    )
}

export default ItemList