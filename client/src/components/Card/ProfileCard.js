import React from "react";
import CardContainer from './CardContainer'
import CardHeader from './CardHeader'
import CardContent from './CardContent'
import CardFooter from './CardFooter'
import PComponent from '../PComponent'
import ProfilePic from "../ProfilePic";

function profileCard() {
    return (
        <CardContainer>
            <CardHeader>
                <PComponent>Users Dashboard</PComponent>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter></CardFooter>
        </CardContainer>
    )
}

export default profileCard