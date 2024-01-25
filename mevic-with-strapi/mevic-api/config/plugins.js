module.exports = ({ env }) => ({
    // ...
    upload: {
        // Update your cloudinary credentials here
        config: {
            provider: "cloudinary",
            providerOptions: {
                cloud_name: "dikoy.........",
                api_key: "897716612...........",
                api_secret: "DMNJ6W3UDPvSwtn.............",
            },
            actionOptions: {
                upload: {},
                delete: {},
            },
        },
    },
    // ...
});