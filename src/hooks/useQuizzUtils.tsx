const useQuizzUtils = () => ({
    setAnswer: (quizzItem: QuizzItemData, newValue: string) => {
        quizzItem.answer = newValue;
    }
})