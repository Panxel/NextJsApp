import { PageLayout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Page(){
    return (
    <PageLayout>
        <Card>
            <CardHeader>
                <CardTitle>
                    Plan de formation
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <Link href = "/formations/video1" className="text-indigo-500 underline"> Fondamentals </Link>
                <Link href = "/formations/video2" className="text-indigo-500 underline"> Server Component + Prisma Server </Link>
                <Link href = "/formations/video3" className="text-indigo-500 underline"> Server Function + Mutation </Link>
            </CardContent>
        </Card>
    </PageLayout>
    );
}
