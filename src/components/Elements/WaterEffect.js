import * as React from "react"
import * as $ from "jquery"
import cleanProps from "clean-react-props"

const useRipples = ({
  imageUrl,
  dropRadius,
  perturbance,
  resolution,
  interactive,
  crossOrigin,
  rippleRef,
}) => {
  const target = React.useRef({
    ripples: (_arg, ..._args) => {},
  })

  React.useEffect(() => {
    target.current = $(rippleRef.current)

    target.current.ripples({
      imageUrl,
      dropRadius,
      perturbance,
      resolution,
      interactive,
      crossOrigin,
    })

    return () => {
      target.current.ripples("destroy")
    }
  }, [
    crossOrigin,
    dropRadius,
    imageUrl,
    interactive,
    perturbance,
    resolution,
    rippleRef,
  ])

  const destroy = () => {
    target.current.ripples("destroy")
  }

  const drop = ({ x, y, radius, strength }) => {
    target.current.ripples("drop", x, y, radius, strength)
  }

  const pause = () => {
    target.current.ripples("pause")
  }

  const play = () => {
    target.current.ripples("play")
  }

  const hide = () => {
    target.current.ripples("hide")
  }

  const show = () => {
    target.current.ripples("show")
  }

  const set = ({ property, value }) => {
    target.current.ripples("set", property, value)
  }

  const updateSize = () => {
    target.current.ripples("updateSize")
  }

  return {
    destroy,
    pause,
    play,
    hide,
    show,
    drop,
    set,
    updateSize,
  }
}

const WaterEffect = ({
  imageUrl,
  dropRadius,
  perturbance,
  resolution,
  interactive,
  crossOrigin,
  children,
  ...otherProps
}) => {
  const rippleRef = React.useRef(null)
  const {
    destroy,
    pause,
    play,
    hide,
    show,
    drop,
    set,
    updateSize,
  } = useRipples({
    imageUrl,
    dropRadius,
    perturbance,
    resolution,
    interactive,
    crossOrigin,
    rippleRef,
  })

  return (
    <div ref={rippleRef} {...cleanProps(otherProps)}>
      {children({
        destroy,
        pause,
        play,
        hide,
        show,
        drop,
        set,
        updateSize,
      })}
    </div>
  )
}

WaterEffect.defaultProps = {
  imageUrl: "",
  dropRadius: 20,
  perturbance: 0.03,
  resolution: 256,
  interactive: true,
  crossOrigin: "",
  children: () => {},
}

export default WaterEffect
