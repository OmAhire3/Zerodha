import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Hero from "../home/Hero.js";

describe('Hero Component', () => {
    test('render hero image', () => {
        render(
            <MemoryRouter>
                <Hero />
            </MemoryRouter>
        );

        const heroImage = screen.getByAltText("Hero");

        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute(
            "src",
            "media/images/main.svg"
        );
    });
});