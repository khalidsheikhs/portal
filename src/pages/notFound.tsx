import { NavLink } from "react-router-dom"
import { useState, useRef, useLayoutEffect, useEffect } from "react"
import type { FormEvent, ChangeEvent } from "react"

function NotFound() {
  const contRef = useRef<HTMLDivElement | null>(null)
  const [width, setWidth] = useState(400)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: 0,
    gender: "",
    agree: false,
    country: "USA"
  })

  useLayoutEffect(()=> {
    console.log("runs useLayoutEffect")
    const elem = contRef.current
    if (!elem) return
    let Wwidth = elem.offsetWidth ?? width
    // width = width += elem.offsetWidth
    elem.style.transform = `translateX(${Wwidth}px)`
  }, [width])

  useEffect(()=> {
    console.log("runs useEffect")
  }, [])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget

    if (!form.checkValidity()) {
      setError("Please fill in all required fields correctly.")
      form.reportValidity()
      return
    }

    setError("")
    console.log("Form Submitted:", formData)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, type, value } = e.target
    const checked =
    e.target instanceof HTMLInputElement
      ? e.target.checked
      : undefined

    // console.log(name, type === "checkbox" ? checked : value)

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
  } 

  return (
    <div ref={contRef} style={{ width: width+"px", backgroundColor: "skyblue", transition: "transform 3s ease" }}>
      <h1>404</h1>
      <p>Page not found.</p>
      <NavLink to={'/login'}>
        Back to Login
      </NavLink><br /><br /><br /><br /><br />
      <button onClick={() => setWidth(width+5)}>Increase width</button>

    <form onSubmit={handleSubmit} noValidate>
      <label>
        Name:
        <input 
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </label><br /><br />

      <label>
        Email:
        <input 
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </label><br /><br />

      <label>
        Age:
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </label><br /><br />

      <label>
        <input 
          type="radio" 
          name="gender" 
          value="Male"
          checked={formData.gender === "Male"}
          onChange={handleChange} 
        />
        Male
      </label><br /><br />

      <label>
        <input 
          type="radio" 
          name="gender" 
          value="Female" 
          checked={formData.gender === "Female"}
          onChange={handleChange} 
        />
        Female
      </label><br /><br />

      <label>
        Country:
        <select 
          name="country" 
          value={formData.country} 
          onChange={handleChange}
        >
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>
      </label><br /><br />

      <label>
        <input 
          type="checkbox" 
          name="agree" 
          checked={formData.agree}
          onChange={handleChange}
        />
        I agree to terms and conditions
      </label><br /><br />
      <input type="submit" value="Submit" />
      {error && <div className="alert">{error}</div>}
    </form>

    </div>
  )
}

export default NotFound