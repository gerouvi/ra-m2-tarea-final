import styled from 'styled-components'
import { colors } from '../../styles'
import dimensions from '../../styles/dimensions'
import { InputText, SearchIcon } from '../atoms'
import Icon from '../atoms/IconButton'

const SubHeaderStyled = styled.div`
  display: flex;
  gap: 20px;
  background-color: ${colors.lightblue};
  padding: ${dimensions.padding.sm} ${dimensions.padding.base};
`

function SubHeader() {
  return (
    <SubHeaderStyled>
      <InputText placeholder="Piso, chalet o garaje..." />
      <InputText placeholder="Madrid, Barcelona o Zaragoza..." />
      <Icon icon={<SearchIcon />} />
    </SubHeaderStyled>
  )
}

// Puedes ir un nivel más allá y hacer export defaul styled(SubHeader)``
// Pero para que funcione deberas de hacer uso de className en el componente
// La mejor manera es con spread props
export default SubHeader
