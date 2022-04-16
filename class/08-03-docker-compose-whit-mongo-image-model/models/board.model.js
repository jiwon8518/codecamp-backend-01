import mongoose from 'mongoose';

const boardSchema = new mongoose.Schema({
    writer: String,
    title: String,
    contents: String
});

export const Board = mongoose.model("Board", boardSchema) // 보드라는 컬렉션 만들기
