import {Stack, TextField, Typography} from "@mui/material";

interface QuizzItemProps {
    question: string
}

export const QuizzItem = ({question} : QuizzItemProps) => {
    return (
        <>
        <Stack>
            <Typography data-testid="question">{question}</Typography>
            <TextField data-testid="answer"></TextField>
        </Stack>
        </>
    )
}