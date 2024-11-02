import "./MostPopular.css"

import {Card,SectionHeader,SectionWrapper} from "../../Components/index"
import MostPopularData from "../../Data/MostPopularData"

const MostPopular = () => {
    
    const cards = MostPopularData.map(card => {
        return <Card key={card.id} image={card.image} title ={card.title} category={card.category}  rate={card.rate} download={card.download} />
    })

return (
    <>
        <SectionWrapper>
            <SectionHeader>Most Popular</SectionHeader>
            <div className="most-popular-items">
                {cards}
            </div>
        </SectionWrapper>
    </>
)
}

export default MostPopular
