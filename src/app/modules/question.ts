export default class Question {
    _id: string;
    question: string;
    answer: string;
    _subjectId: string;
    keywords: [string];
    isApproved: boolean;
}