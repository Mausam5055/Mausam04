import { Flex } from "@/once-ui/components";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import { baseURL } from "@/app/resources";
import { projects, person } from "@/app/resources/content";

export async function generateMetadata() {
    const title = projects.title;
    const description = projects.description;
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: "website",
            url: `https://${baseURL}/projects`,
            images: [
                {
                    url: ogImage,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [ogImage],
        },
    };
}

export default function Projects() {
    return (
        <Flex fillWidth>
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        name: projects.title,
                        description: projects.description,
                        url: `https://${baseURL}/projects`,
                        itemListElement: projects.items.map((project, index) => ({
                            "@type": "ListItem",
                            position: index + 1,
                            item: {
                                "@type": "SoftwareSourceCode",
                                name: project.title,
                                description: project.description,
                                codeRepository: project.github,
                                image: `${baseURL}${project.image}`,
                            },
                        })),
                        author: {
                            "@type": "Person",
                            name: person.name,
                            image: {
                                "@type": "ImageObject",
                                url: `${baseURL}${person.avatar}`,
                            },
                        },
                    }),
                }}
            />
            <MasonryGrid />
        </Flex>
    );
}
