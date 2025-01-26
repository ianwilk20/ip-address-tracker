# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

Mobile:

![Mobile step 1](/design/completed/mobile-init.png)


Desktop:

![Desktop step 1](/design/completed/desktop-init.png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Tailwind](https://tailwindcss.com/docs) - For styles
- [React](https://reactjs.org/) - JS library
- [React leaflet](https://react-leaflet.js.org/) - React components for Leaflet maps
- [ip-api](https://ip-api.com/) - IP Geolocation API


### What I learned

- I learned how to make a custom hook that takes an IP address and makes an API call to get details about that IP address. The hook also exposes loading and error states in case someone wants to perform certain actions based on those states. The `useIPTracker` could easly be reused/refactored as such for other API calls:

```JS
const useAPI = (query: string) {
  const [data, setData] = useState({})
  // optionally - expose loading and error states

  useEffect(() => {
    if(!query) return

    const callAPI = async () => {
      try {
        // optionally - set loading state true
        const result = await fetch(`http://your-api-endpoint.com/api/${query}`)
        const resp = await result.json()
        if(resp.status === "success")
          setData(resp)
      } catch (error) {
        // optionally - set error state / handle error
      } finally {
        // optionally - set loading state false
      }
    }

    callAPI()
  }, [query])

  return {data} // and anything else you want to return
}
```

- I also learned how to add another breakpoint to Tailwind's default breakpoints of `sm`, `md`, `lg`, `xl`, `2xl`. I needed to add a breakpoint smaller than `sm` since the provided mobile image was only for screens up to 320px. I accomplished adding another breakpoint, `xs`, by the following addition to the tailwind.config.json:
```JS
export default {
  content: [],
  theme: {
    extend: {
      screens: {
        'xs': '375px'
      },
    },
  },
  plugins: [],
}
```

### Continued development

I'd like to continue to practice TypeScript. This was my first frontend mentor challenge that I used it and very minimally (since it wasn't a big challenge with lots of things to type).

After trying out some random but valid IP Addresses I realized that I'd need to handle some possible error cases. I did a simple strategy of showing an alert and resetting the input field but I could also see a benefit in using something like react-error-boundary. I haven't used this library before but I could see it's utility and would like to try it out.

### Useful resources

- [Tailwind Responsive Design](https://tailwindcss.com/docs/responsive-design) - This helped me with creating a new Tailwind screen breakpoint.
- [Reusing Logic with Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks) - This is an great guide on how to build custom hooks in React.