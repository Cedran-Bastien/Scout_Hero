import      {describe, expect, it} from "vitest";
import {Quizz} from "@/components/molecule/Quizz/Quizz";
import {render} from "@testing-library/react";
import {QuizzItem} from "@/components/atomes/QuizzItem/QuizzItem";

describe("QuizzItem component testing", () => {
    it("should display one question and one aswer field", () => {
        const { queryByTestId } = render(<QuizzItem question=""/>)

        const question = queryByTestId("question")
        const answerField = queryByTestId("answer");

        expect(question).toBeInTheDocument();
        expect(answerField).toBeInTheDocument();
    });

    it("should display custom question", () => {
        const questionText = "is that working"

        const { getByTestId } =  render(<QuizzItem question={questionText} />)

        const question = getByTestId("question")

        expect(question).toHaveTextContent(questionText)

    })
})