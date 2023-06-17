
const Box = ({box, index}) => {

    return (
        <div
            key={index}
            style={{
              backgroundColor: box.color,
              width: box.size,
              height: box.size,
              display: 'inline-block',
              margin: '5px',
            }}
          ></div>
    )
}
export default Box