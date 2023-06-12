import React, {useState} from 'react';
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const defaultSourceCode =
`printer.print("Hello World");
printer.println("Hello World");
printer.setCharacterSet("SLOVENIA");
printer.bold(true);
printer.setTextSize(2, 2);
printer.leftRight("Left", "Right");
`

function PrintTickets({}) {
    const [printerSourceCode, setPrinterSourceCode] = useState(defaultSourceCode)
    function sendPrintSourceCode() {
        window['sendPrintTicket'](printerSourceCode)
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
                    onChange={(event) => setPrinterSourceCode(event.target.value)}
                    multiline
                    rows={10}
                    value={printerSourceCode}
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
                    onClick={sendPrintSourceCode}
                    color="primary"
                    variant="contained">
                    Imprimer
                </Button>
            </Box>
        </div>
    );
}

export default PrintTickets;
