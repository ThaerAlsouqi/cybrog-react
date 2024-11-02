import lol_image from "../assets/images/lolimage.jpg"
import cs_go_image from "../assets/images/cs-goimage.png"
import valo_image from "../assets/images/valoimage.jpg"
import fortnite_image from "../assets/images/fortniteimage.jpg"
import dota2_image from "../assets/images/dota2image.png"

const FeaturedGamesData = [
    {id: "item_0" , image :lol_image, name: "LOL", downloads: "95M", rate: "4.9", url: "https://www.twitch.tv/directory/category/league-of-legends"},
    {id: "item_1" , image :cs_go_image, name: "CS-GO", downloads: "47M", rate: "3.9", url: "https://www.twitch.tv/directory/category/counter-strike"},
    {id: "item_2" , image :valo_image, name: "Valorant", downloads: "55M", rate: "4.2", url: "https://www.twitch.tv/directory/category/valorant"},
    {id: "item_3" , image :fortnite_image, name: "Fortnite", downloads: "52M", rate: "2.9", url: "https://www.twitch.tv/directory/category/fortnite"},
    {id: "item_4" , image :dota2_image, name: "Dota 2", downloads: "53M", rate: "4.5", url: "https://www.twitch.tv/directory/category/dota-2"},
]

export default FeaturedGamesData