import React from "react";


 const createCard = (id) => {
    return (
        <Card verticalSpace="xs" horizontalSpace="xs" key={id}>
            <Text>{faker.lorem.sentence()}</Text>
            <Text>{faker.lorem.paragraph()}</Text>
        </Card>
    )
}


const Main = () => {
    return (
        <div>
            {Array(10).fill(0).map(id => (createCard(id)))}
        </div>
    )
}

export default Main;