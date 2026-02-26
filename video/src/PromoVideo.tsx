import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide";
import { fade } from "@remotion/transitions/fade";
import { Intro } from "./scenes/Intro";
import { PortfolioShowcase } from "./scenes/PortfolioShowcase";
import { ContactWindow } from "./scenes/Skills";
import { Projects } from "./scenes/Projects";
import { CTA } from "./scenes/CTA";

const TRANSITION_DURATION = 15;

export const PromoVideo = () => {
    return (
        <TransitionSeries>
            {/* Scene 1: Browser opening, typing URL, loading */}
            <TransitionSeries.Sequence durationInFrames={120}>
                <Intro />
            </TransitionSeries.Sequence>

            <TransitionSeries.Transition
                presentation={fade()}
                timing={linearTiming({ durationInFrames: TRANSITION_DURATION })}
            />

            {/* Scene 2: macOS desktop with dock, icons, typewriter "Portfolio" */}
            <TransitionSeries.Sequence durationInFrames={150}>
                <PortfolioShowcase />
            </TransitionSeries.Sequence>

            <TransitionSeries.Transition
                presentation={fade()}
                timing={linearTiming({ durationInFrames: TRANSITION_DURATION })}
            />

            {/* Scene 3: Contact window opens, form interaction */}
            <TransitionSeries.Sequence durationInFrames={130}>
                <ContactWindow />
            </TransitionSeries.Sequence>

            <TransitionSeries.Transition
                presentation={fade()}
                timing={linearTiming({ durationInFrames: TRANSITION_DURATION })}
            />

            {/* Scene 4: Terminal + Finder showing projects */}
            <TransitionSeries.Sequence durationInFrames={130}>
                <Projects />
            </TransitionSeries.Sequence>

            <TransitionSeries.Transition
                presentation={fade()}
                timing={linearTiming({ durationInFrames: TRANSITION_DURATION })}
            />

            {/* Scene 5: CTA / Outro */}
            <TransitionSeries.Sequence durationInFrames={105}>
                <CTA />
            </TransitionSeries.Sequence>
        </TransitionSeries>
    );
};
