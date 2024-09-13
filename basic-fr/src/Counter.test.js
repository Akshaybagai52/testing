import Counter from "./Counter";
import { screen, render } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

describe("Counter", () => {
    it("should render", () => {
        render(<Counter />)
        const comp = screen.getByRole('heading')
        expect(comp).toBeInTheDocument();
    })

    it("should show 0 on first render", () => {
        render(<Counter />)
        const comp = screen.getByRole('heading')
        expect(comp).toHaveTextContent(0)
    })

    it("should show 1 on first click", async () => {
        const user = userEvent.setup()
        render(<Counter />)
        const comp = screen.getByRole('heading')
        const button = screen.getByRole('button', {
            name: /add/i
        })
       await user.click(button)
        expect(comp).toHaveTextContent('1')
    })

    it("should show 2 on double click", async () => {
        const user = userEvent.setup()
        render(<Counter />)
        const comp = screen.getByRole('heading')
        const button = screen.getByRole('button', {
            name: /add/i
        })
       await user.dblClick(button)
        expect(comp).toHaveTextContent('2')
    })

})