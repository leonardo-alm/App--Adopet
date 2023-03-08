export interface IPetProps {
    animal: {
        "id": number,
        "type": string;
        "breeds": {
            "primary": string;
            "secondary": string;
            "mixed": string;
            "unknown": string;
        },
        "colors": { "primary": string; "secondary": string; "tertiary": string; },

        "gender": string;
        "name": string;
        "photos": [
            {
                "small": string;
                "medium": string;
                "large": string;
                "full": string;
            },
            {
                "small": string;
                "medium": string;
                "large": string;
                "full": string;
            },
            {
                "small": string;
                "medium": string;
                "large": string;
                "full": string;
            }
        ],
    }
}