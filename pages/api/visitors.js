import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'GET') {
        // besucher zählen
        let visitor = await prisma.visitor.findFirst(); // ersten visitor erwarten von prisma
        if (!visitor) {                                                                                                // wenn visitor noch nicht existiert lege visitor an und zähle 1
            visitor = await prisma.visitor.create({ data: { count: 1 } });
        } else {
            visitor = await prisma.visitor.update({                                                             //wenn visitor existiert update visitor count +1
                where: { id: visitor.id },
                data: { count: visitor.count + 1 },
            });
        }
        res.status(200).json({ visitorCount: visitor.count });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}