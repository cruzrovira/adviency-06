import {Flex, VStack, Input, Button, Heading, Text} from "@chakra-ui/react"
import {useState, useEffect} from "react"
import {v4 as uuidv4} from "uuid"

const initRegalos = [
  {id: uuidv4(), name: "Medias "},
  {id: uuidv4(), name: "caramelos"},
  {id: uuidv4(), name: "Vitel Tone"},
]

function App() {
  const [regalos, setRegalos] = useState([])
  const [regalo, setRegalo] = useState("")

  useEffect(() => {
    setRegalos(initRegalos)
  }, [])

  const handlerSubmit = (e) => {
    e.preventDefault()
    if (regalo.trim() !== "") {
      setRegalos([...regalos, {id: uuidv4(), name: regalo.trim()}])
    }
    setRegalo("")
  }
  const handlerDeleteById = (id) => {
    setRegalos(regalos.filter((item) => item.id !== id))
  }
  const handlerDeleteAll = () => {
    setRegalos([])
  }
  const redalosRender = regalos.map((item) => (
    <Flex key={item.id} justifyContent="space-between" w="100%">
      <Text>{item.name}</Text>
      <Button colorScheme="red" size="xs" onClick={() => handlerDeleteById(item.id)}>
        x
      </Button>
    </Flex>
  ))

  return (
    <Flex alignItems="center" justifyContent="center" minH="100vh" w="100%">
      <VStack background="white" boxShadow="md" p={4} w="30%">
        <Heading fontFamily="'Mountains of Christmas'">Regalos:</Heading>
        <Flex as="form" gap={2} onSubmit={handlerSubmit}>
          <Input placeholder="Regalo" value={regalo} onChange={(e) => setRegalo(e.target.value)} />
          <Button colorScheme="red" type="submit">
            Agregar
          </Button>
        </Flex>
        <VStack w="100%">
          {regalos.length !== 0 ? (
            redalosRender
          ) : (
            <Text color="gray.400">No hay regalos Grinch!! agrega uno .</Text>
          )}
        </VStack>
        {regalos.length !== 0 && (
          <Button colorScheme="red" w="100%" onClick={handlerDeleteAll}>
            Borrar todo
          </Button>
        )}
      </VStack>
    </Flex>
  )
}

export default App
