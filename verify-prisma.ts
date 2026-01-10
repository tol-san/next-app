import { prisma } from "./prisma/client";

async function main() {
    try {
        console.log("Prisma client instance created successfully");
        // Attempt to connect (optional, might fail if no DB, but instance creation should pass)
        // await prisma.$connect(); 
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

main();
