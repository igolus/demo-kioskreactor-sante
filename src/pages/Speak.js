import React, {useState} from 'react';
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";

function Speak({}) {

    const [text, setText] = useState("Bonjour")

    function speak() {
        window['speak'](text)
    }

    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row-reverse',
                    p: 1,
                    m: 1,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                }}
            >
                <TextField
                    inputProps={{
                        autocomplete: "new-password"
                    }}
                    fullWidth
                    onChange={(event) => setText(event.target.value)}
                    multiline
                    rows={10}
                    value={text}
                    variant="outlined"
                />
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row-reverse',
                    p: 1,
                    m: 1,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                }}
            >
                <Button
                    onClick={speak}
                    color="primary"
                    variant="contained">
                    Parler
                </Button>
            </Box>

        </div>
    );
}

export default Speak;
