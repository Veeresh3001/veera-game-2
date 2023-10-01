import {Image, ImageBtn} from '../style'

const ChoiceImage = props => {
  const {item, clickImage} = props
  const {id, imageUrl} = item

  const onClickImage = () => {
    clickImage(item)
  }

  return (
    <li>
      <ImageBtn
        type="button"
        onClick={onClickImage}
        data-testid={`${id.toLowerCase()}Button`}
      >
        <Image src={imageUrl} alt={id} />
      </ImageBtn>
    </li>
  )
}

export default ChoiceImage
