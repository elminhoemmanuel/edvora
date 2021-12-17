import { extendTheme, theme as base, withDefaultColorScheme, withDefaultVariant } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools"


const inputStyles = {
    
}

const brandRing = {
    ring:2,
}

const theme = extendTheme({
    colors: {
        brand: {
            50: '#232323',
            100: '#131313',
            border: 'rgba(203, 203, 203, 0.5)',
        }

    },
    fonts: {
        heading: `Poppins, ${base.fonts?.heading}`,
        body: `Poppins, ${base.fonts?.body}`,
    },
    components: {
        
    },
},
    withDefaultColorScheme({
        colorScheme: "brand",
        components: ["Checkbox", "Input", "Select"]
    }),
    withDefaultVariant({
        variant: "filled",
        components: ["Input", "Select"]
    })
);

export default theme;