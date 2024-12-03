import { Hero } from "../components/Hero/Hero"
import { JSRTC } from "../components/JSRTC/JSRTC"
import { TechnologiesUsed } from "../components/TechnologiesUsed/TechnologiesUsed"
import { Xp } from "../components/Xp/Xp"

export const MainPage = () => {
    // return (
    //     <Hero />
    // )
    return (
        <>
            <Hero />
            <Xp />
            <JSRTC />
            <TechnologiesUsed />
        </>
    )
}