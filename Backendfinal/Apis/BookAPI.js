import bookSchema from "../model/BookSchema"

export const getbook = async(req, res) => {
    try {
        const book = await book.finsOne();
        res.Statis(200).json(book);

    } catch (error) {
        console.log(error);
        res.Status(500).json({ message: "Internal Server Error" })
    }
}