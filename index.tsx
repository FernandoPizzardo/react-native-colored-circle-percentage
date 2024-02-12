import { StyleSheet, View, Text } from "react-native";

export default function PercentageCircle(props: any) {
  let percent = props.percent;
  let leftTransformerDegree = "0deg";
  let rightTransformerDegree = "0deg";
  if (percent >= 50) {
    rightTransformerDegree = "180deg";
    leftTransformerDegree = (percent - 50) * 3.6 + "deg";
  } else {
    rightTransformerDegree = percent * 3.6 + "deg";
    leftTransformerDegree = "0deg";
  }

  let state = {
    percent: props.percent,
    borderWidth:
      props.borderWidth < 2 || props.borderWidth ? 2 : props.borderWidth,
    leftTransformerDegree: leftTransformerDegree,
    rightTransformerDegree: rightTransformerDegree,
    textStyle: props.textStyle ? props.textStyle : null,
  };

  return (
    <>
      <View
        style={[
          {
            width: props.radius,
            height: props.radius * 2,
            left: 0,
          },
        ]}
      >
        <View
          style={[
            styles.loader,
            {
              left: props.radius,
              width: props.radius,
              height: props.radius * 2,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              backgroundColor: props.color,
              transform: [
                { translateX: -props.radius / 2 },
                { rotate: props.leftTransformerDegree },
                { translateX: props.radius / 2 },
              ],
            },
          ]}
        ></View>
      </View>
      <View
        style={[
          styles.leftWrap,
          {
            left: props.radius,
            width: props.radius,
            height: props.radius * 2,
          },
        ]}
      >
        <View
          style={[
            styles.loader,
            {
              left: -props.radius,
              width: props.radius,
              height: props.radius * 2,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              backgroundColor: props.color,
              transform: [
                { translateX: props.radius / 2 },
                { rotate: props.rightTransformerDegree },
                { translateX: -props.radius / 2 },
              ],
            },
          ]}
        ></View>
      </View>
      <View
        style={[
          styles.innerCircle,
          {
            width: (props.radius - props.borderWidth) * 2,
            height: (props.radius - props.borderWidth) * 2,
            borderRadius: props.radius - props.borderWidth,
            backgroundColor: props.innerColor,
          },
        ]}
      >
        {props.children ? (
          props.children
        ) : (
          <Text style={[styles.text, props.textStyle]}>{props.percent}%</Text>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  circle: {
    overflow: "hidden",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e2e3e3",
  },
  leftWrap: {
    overflow: "hidden",
    position: "absolute",
    top: -1,
  },
  rightWrap: {
    position: "absolute",
  },

  loader: {
    position: "absolute",
    left: -1,
    top: -1,
    borderRadius: 999,
  },

  innerCircle: {
    overflow: "hidden",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 10,
    color: "#887",
  },
});
