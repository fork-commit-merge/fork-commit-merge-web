import Link from "next/link";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

const markdownContent = `
# Adventure Game by nitin-pandita

You find yourself standing at a crossroads. What do you do?

- [Go left](#left)
- [Go right](#right)

## Left

You walk down the left path and encounter a mysterious door. What do you do?

- [Knock on the door](#knock)
- [Ignore the door and keep walking](#continue)

## Right

You head down the right path and come across a river. What's your next move?

- [Try to swim across](#swim)
- [Look for a bridge](#bridge)

## Knock

The door creaks open slowly, revealing a dark room with a single candle. Do you enter or leave?

- [Enter the room](#enter)
- [Leave the door and go back](#left)

## Continue

You decide to ignore the door and continue walking. As you walk, you find a hidden treasure!

Congratulations, you've found the treasure and won the game!

---

# Mysterious Forest by krushnarout

You find yourself in a forest. There are two paths ahead of you:

## Path 1: North

You head north and encounter a river.

- To swim across, go to [Swim](#swim)
- To build a raft, go to [Build Raft](#raft)

## Path 2: South

You head south and come across a cave entrance.

- To enter the cave, go to [Enter Cave](#cave)
- To continue exploring the forest, go to [Continue Exploring](#forest)

## Swim

You try to swim across the river, but the current is too strong.

You've been swept away. Game over.

[Start Over](#adventure)

## Build Raft

You gather logs and vines to build a raft. It takes some effort, but you successfully cross the river.

You've made it to the other side. What now?

- To explore the cave, go to [Enter Cave](#cave)
- To rest by the campfire, go to [Campfire](#campfire)

## Enter Cave

You enter the dark cave and discover a hidden treasure!

Congratulations! You've won the game.

[Play Again](#adventure)

## Continue Exploring

You continue to explore the forest but get lost.

You've been wandering for hours. Game over.

[Start Over](#adventure)

## Campfire

You rest by the campfire and enjoy a peaceful moment.

What would you like to do?

- To stay by the campfire, go to [Stay](#stay)
- To go back to the raft, go to [Go Back](#raft)

## Stay

You stay by the campfire and fall asleep. It's a peaceful night.

Congratulations! You've survived the adventure.

[Play Again](#adventure)

## Go Back

You return to the raft and decide to continue your journey.

- To explore the cave, go to [Enter Cave](#cave)
- To rest by the campfire, go to [Campfire](#campfire)
`;

interface ReactNodeWithProps {
    props: {
        value: string;
    };
}

interface HeadingProps {
    level: number;
    children?: ReactNodeWithProps[];
}

const headingRenderer = ({ level, children }: HeadingProps) => {
    if (
        !children ||
        children.length === 0 ||
        !children[0].props ||
        !children[0].props.value
    )
        return null;

    const content = children[0].props.value;
    const id = content.toLowerCase().replace(/[^a-z]+/g, "-");

    switch (level) {
        case 1:
            return <h1 id={id}>{content}</h1>;
        case 2:
            return <h2 id={id}>{content}</h2>;
        case 3:
            return <h3 id={id}>{content}</h3>;
        case 4:
            return <h4 id={id}>{content}</h4>;
        case 5:
            return <h5 id={id}>{content}</h5>;
        case 6:
            return <h6 id={id}>{content}</h6>;
        default:
            return <div>{content}</div>;
    }
};

const handleMarkdownLinkClick = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target instanceof HTMLAnchorElement) {
        const href = event.target.getAttribute("href");
        console.log("Clicked href:", href);

        if (href && href.startsWith("#")) {
            const targetElement = document.getElementById(href.slice(1));
            console.log("Found target element:", targetElement);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    }
};

interface LinkRendererProps {
    href: string;
    children: React.ReactNode;
}

const linkRenderer = ({ href, children }: LinkRendererProps) => {
    if (href && href.startsWith("#")) {
        return (
            <a
                href={href}
                onClick={handleMarkdownLinkClick}
                className="markdown-anchor"
            >
                {children}
            </a>
        );
    } else {
        return (
            <Link href={href}>
                <a target="_blank" rel="noopener noreferrer">
                    {children}
                </a>
            </Link>
        );
    }
};

const renderers = {
    heading: headingRenderer,
    link: linkRenderer,
};

export default function Adventures() {
    return (
        <div className="bg-slate-950 text-white py-10 px-5 flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold mb-16">
                Adventure Games in Markdown
            </h1>
            <div className="flex flex-wrap justify-center">
                <p className="mb-6">
                    This page contains a collection of adventure games written
                    in Markdown by our contributors. The games relate to the
                    Markdown Hard issue in the
                    <Link
                        href="https://github.com/nikohoffren/fork-commit-merge/issues/56"
                        target="blank"
                    >
                        Fork, Commit, Merge repository
                    </Link>
                    .
                </p>
                <div className="markdown-content mt-8 w-full max-w-2xl">
                    <ReactMarkdown
                        remarkPlugins={[gfm]}
                        components={renderers as any}
                    >
                        {markdownContent}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    );
}
