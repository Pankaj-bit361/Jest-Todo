import { fireEvent, render, screen } from "@testing-library/react"
import App from "../App"
import Counter from "../components/Counter"

describe("Counter Components Test",()=>{
    it("Should have counter component",()=>{
        render(<Counter/>)
       
    })
    it("should have ADD and Reduce buttons",()=>{
        render(<Counter/>)
        const add_button=screen.getByTestId("counter-add")
        expect(add_button).toHaveTextContent("ADD")
        const reduce_button=screen.getByTestId("counter-reduce")
        expect(reduce_button).toHaveTextContent("REDUCE")
    })
    it("should have initial counter value 0",()=>{
        render(<Counter/>)
        const text=screen.getByTestId("counter")
        expect(text).toHaveTextContent("Counter: 0")
    })
    it("onClick of ADD, value of Counter should increment by 5",()=>{
       
        render(<Counter />)
        const button=screen.getByTestId("counter-add")
        fireEvent.click(button)
        const text=screen.getByTestId("counter")
        expect(text).toHaveTextContent("Counter: 5")
        fireEvent.click(button)
        expect(text).toHaveTextContent("Counter: 10")
    })
    it("onClick of ADD, value of Counter should Decrement by -5",()=>{
       
        render(<Counter />)
        const button=screen.getByTestId("counter-reduce")
        fireEvent.click(button)
        const text=screen.getByTestId("counter")
        expect(text).toHaveTextContent("Counter: -5")
        fireEvent.click(button)
        expect(text).toHaveTextContent("Counter: -10")
    })
})