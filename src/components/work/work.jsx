import React, { useState } from "react"

function Work(){
    const { features } = useState([
        '10gb space',
        "5 domain names",
        'unlimited mails'
    ])

    return (
        <div>
            <Card>
                <Content>
                    <Icon />
                    <PlanTitle>basic</PlanTitle>
                    <PlanCost>Cost</PlanCost>
                    {features.map(item =>(
                        <FeaturesListItem>
                            <span>{item}</span>
                        </FeaturesListItem>
                    ))}
                    <ActionButton>Order now</ActionButton>
                </Content>
            </Card>
        </div>

    )

}

export default Work;