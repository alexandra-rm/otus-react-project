/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { Box, Typography } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";

export const About = () => {
    return (
        <Box
            border={1}
            borderColor="#cccccc"
            borderRadius="borderRadius"
            padding={2}
            css={{ marginTop: 8 }}
        >
            <Typography variant="h2">Игра &laquo;Жизнь&raquo;</Typography>
            <Typography paragraph>
                Игра &laquo;Жизнь&raquo; &mdash; это проектная работа курса
                &laquo;React JS разработчик&raquo; в школе &laquo;Otus&raquo;.
            </Typography>
            <Typography paragraph>
                Работа является реализацией клеточного автомата{" "}
                <Link
                    href="https://ru.wikipedia.org/wiki/Игра_«Жизнь»"
                    target="_blank"
                >
                    Игра &laquo;Жизнь&raquo;
                </Link>{" "}
                на React JS.
            </Typography>

            <Typography variant="h3">Презентации</Typography>
            <ListItem
                button
                component={Link}
                target="_blank"
                href="https://github.com/shurupov/otus-react-project/blob/authentication/Presentation.odp"
            >
                <ListItemText primary="ODP презентация" />
            </ListItem>
            <ListItem
                button
                component={Link}
                target="_blank"
                href="https://docs.google.com/presentation/d/e/2PACX-1vTtJpjPjNmKIxW-hrjlhar5itVQp9TIDhgWIeRgmNBsOxbP8_7T2sqGwv46koQfH1fmTXrsJZuAtO9F/pub?start=false&loop=false&delayms=3000"
            >
                <ListItemText primary="Google Slides презентация" />
            </ListItem>

            <Typography variant="h3">Используемые технологии</Typography>
            <ListItem button component="li">
                <ListItemText primary="Babel, Webpack, TypeScript, loki, Jest" />
            </ListItem>
            <ListItem button component="li">
                <ListItemText primary="ReactJS, JSX, Storybook, Emotion, Enzyme, material-ui" />
            </ListItem>
            <ListItem button component="li">
                <ListItemText primary="Redux, Saga, redux-saga-test-plan" />
            </ListItem>
            <ListItem button component="li">
                <ListItemText primary="ReactRouter" />
            </ListItem>
            <ListItem button component="li">
                <ListItemText primary="Express, pupeteer/NextJS (SSR)" />
            </ListItem>
        </Box>
    );
};
