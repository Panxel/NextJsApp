import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PageLayout } from "@/components/layout";
import { VIDEOS } from "../data";
import Link from "next/link";

export default async function Page(props:{ params:Promise<{
    videoId:string}>}) {
        const params = await props.params;
        const video = VIDEOS.find(video => video.id == params.videoId)

        if (!video){
            return <p>invalid video</p>
        }

        return (
            <PageLayout>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            {video.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                        <pre>
                            {JSON.stringify(video,null,2)}
                            <ul className="list-disc list-inside">
                                {video?.lessons.map((lesson) =>(
                                    <li key = {lesson.title}>{lesson.title}</li>
                                ))}
                            </ul>
                        </pre>
                    </CardContent>
                    <CardFooter>
                        <Link href = "/formations">Back</Link>
                    </CardFooter>
                </Card>
            </PageLayout>
            );
        }