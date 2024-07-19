'use client'

import { Input } from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { Card, CardBody, Box } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import {
  ListItem,
  UnorderedList,
} from '@chakra-ui/react'
import Image from 'next/image';

import Add from '@/icons/add.svg';
import Machine from '@/icons/machine.svg';
import Checklist from '@/icons/checklist.svg';
import Watch from '@/icons/watch.svg';
import Search from '@/icons/search.svg';

import { Button } from '@chakra-ui/react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { useState } from 'react'

export default function Home() {

  const menu = ['PRODUCTS', 'EXTRUSION', 'ARCHIVE', 'SEARCH'];
  const [currentPage, setCurrentPage] = useState(menu[3]);

  const data = [
    {
      id: 0,
      name: 'Polietileno',
      unit: 'Gr(s)'
    },
    {
      id: 1,
      name: 'Polietileno ll',
      unit: 'Kg(s)'
    }
  ];

  return (
    <>
      {currentPage === menu[0] &&
        <div>
          <h1 className='mb-4 text-[3.5rem] mt-5 font-extrabold text-center text-[#369C67]'> Productos </h1>
          <Card className='mx-6 mt-6'>
            <CardBody>
              <form action="" className='mb-16'>
                <label htmlFor="product-name">Nombre del producto</label>
                <Input placeholder='Polietileno' id="product-name" className='mb-4' />

                <label htmlFor="product-name">Unidad de medida</label>
                <Input placeholder='Gr' id="product-name" className='mb-8' />

                <Button colorScheme='green' className='w-full'>Guardar</Button>
              </form>

              {data.length > 0 && <TableContainer>
                <Table variant='striped' size='md'>
                  <Thead>
                    <Tr>
                      <Th>Nombre</Th>
                      <Th>Unidad</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data.map(({ id, name, unit }) =>
                      <Tr key={id}>
                        <Td>{name}</Td>
                        <Td>{unit}</Td>
                      </Tr>
                    )}
                  </Tbody>
                  {/* <Tfoot>
            <Tr>
              <Th>Nombre</Th>
              <Th>Unidad</Th>
            </Tr>
          </Tfoot> */}
                </Table>
              </TableContainer>}
            </CardBody>
          </Card >
        </div>
      }

      {/*       <Box position='relative' padding='10'>
        <Divider />
        <AbsoluteCenter bg='white' px='4'>
          DURANTE EXTRUSION
        </AbsoluteCenter>
      </Box> */}


      {currentPage === menu[1] &&
        <>
          <h1 className='mb-4 text-[3.5rem] mt-5 font-extrabold text-center text-[#369C67]'> Extrusión </h1>

          <Tabs isFitted colorScheme='green' variant='enclosed'>
            <TabList mb='1em'>
              <Tab>Mezcla</Tab>
              <Tab>Maquina</Tab>
            </TabList>
            <TabPanels>
              <TabPanel className='min-h-52'>
                <Card>
                  <CardBody>
                    <div className='flex w-full justify-around px-4 mb-2 gap-6'>
                      <div className='w-[80%]'>
                        <label htmlFor="product-selector">Producto</label>
                        <Select id="product-selector" placeholder='Select option'>
                          {data.map(({ name, id }) => <option key={id} value='option1'>{name}</option>)}
                        </Select>
                      </div>

                      <div className='w-[20%]'>
                        <label htmlFor="product-name">Valor</label>
                        <Input placeholder='Gr' id="product-name" type='number' />
                      </div>
                    </div>
                    <div className='flex justify-end'>
                      <Image src={Add} alt='add product' />
                    </div>
                    <UnorderedList className='mb-8'>
                      {data.map(({ id, name }) => {
                        return <div className='grid grid-cols-3 gap-4' key={id}>
                          <ListItem color='green.500' >{name}</ListItem>
                          <p>20 Gr(s)</p>
                          <p className=''>Editar</p>
                        </div>
                      })}
                    </UnorderedList>

                    <Button colorScheme='green' className='w-full'>Guardar</Button>
                  </CardBody>
                </Card>
              </TabPanel>
              <TabPanel className='min-h-[20rem]'>

                <Card>
                  <CardBody>
                    <div className='grid grid-cols-3 gap-y-3 mb-8'>
                      <div className='col-span-2'>
                        <p>Knob #1</p>
                      </div>
                      <div>
                        <Input placeholder='0' type='number' id="temperature-0" />
                      </div>
                      <div className='col-span-2'>
                        <p>Knob #2</p>
                      </div>
                      <div>
                        <Input placeholder='0' type='number' id="temperature-0" />
                      </div>
                      <div className='col-span-2'>
                        <p>Knob #3</p>
                      </div>
                      <div>
                        <Input placeholder='0' type='number' id="temperature-0" />
                      </div>
                      <div className='col-span-2'>
                        <p>Knob #4</p>
                      </div>
                      <div>
                        <Input placeholder='0' type='number' id="temperature-0" />
                      </div>
                      <div className='col-span-2'>
                        <p>T.Ambiente</p>
                      </div>
                      <div>
                        <Input placeholder='0' id="temperature-0" />
                      </div>
                    </div>
                    <textarea className='border-2 rounded-md w-full p-2' placeholder='notas' rows={7}></textarea>
                  </CardBody>
                </Card>
                <Button colorScheme='green' className='w-full mt-4'>Registrar</Button>



                <Card className='mt-8'>
                  <CardBody>
                    <Accordion allowToggle>
                      <AccordionItem>
                        <h2>
                          <AccordionButton>
                            <Box as='span' flex='1' textAlign='left'>
                              Configuración 1
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          <div className='grid grid-cols-4'>
                            <div className='col-span-3'>
                              Knob #1
                            </div>
                            <div>
                              23
                            </div>

                            <div className='col-span-3'>
                              Knob #2
                            </div>
                            <div>
                              23
                            </div>

                            <div className='col-span-3'>
                              Knob #3
                            </div>
                            <div>
                              23
                            </div>

                            <div className='col-span-3'>
                              Knob #4
                            </div>
                            <div>
                              23
                            </div>

                            <div className='col-span-3'>
                              T.Ambiente
                            </div>
                            <div>
                              23
                            </div>
                          </div>

                          <div className='mt-6 border-2 rounded-md p-2'>
                            <p>
                              <textarea disabled value='Texto'></textarea>
                            </p>
                          </div>
                        </AccordionPanel>
                      </AccordionItem>

                    </Accordion>
                    <div className='flex justify-end'>
                      <Image src={Add} alt='add product' />
                    </div>
                  </CardBody>
                </Card>
              </TabPanel>
            </TabPanels>
          </Tabs>

          <div className='text-center'>
            <Button colorScheme='green' className='w-[90%] lg:w-[95%] mt-4 mb-20' height={12}>Finalizar Jornada</Button>
          </div>
        </>
      }

      {/* Archive Zone */}

      {
        currentPage === menu[2] &&
        <>
          <h1 className='mb-4 text-[3.5rem] mt-5 font-extrabold text-center text-[#369C67]'> Archivo </h1>
          <Card className='mx-2'>
            <CardBody>
              <p className='mb-4'>2024-07-18</p>
              <Card>
                <CardBody>
                  <p> Mezcla </p>
                  <UnorderedList className='mb-8'>
                    {data.map(({ id, name }) => {
                      return <div className='grid grid-cols-4 gap-4' key={id}>
                        <ListItem color='green.500' className='col-span-3'>{name}</ListItem>
                        <p>20 Gr(s)</p>
                      </div>
                    })}
                  </UnorderedList>

                  <Accordion allowToggle>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box as='span' flex='1' textAlign='left'>
                            Configuración 1
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <div className='grid grid-cols-4'>
                          <div className='col-span-3'>
                            Knob #1
                          </div>
                          <div>
                            23
                          </div>

                          <div className='col-span-3'>
                            Knob #2
                          </div>
                          <div>
                            23
                          </div>

                          <div className='col-span-3'>
                            Knob #3
                          </div>
                          <div>
                            23
                          </div>

                          <div className='col-span-3'>
                            Knob #4
                          </div>
                          <div>
                            23
                          </div>

                          <div className='col-span-3'>
                            T.Ambiente
                          </div>
                          <div>
                            23
                          </div>
                        </div>

                        <div className='mt-6 border-2 rounded-md p-2'>
                          <p>
                            <textarea disabled value='Texto'></textarea>
                          </p>
                        </div>
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box as='span' flex='1' textAlign='left'>
                            Configuración 2
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <div className='grid grid-cols-4'>
                          <div className='col-span-3'>
                            Knob #1
                          </div>
                          <div>
                            23
                          </div>

                          <div className='col-span-3'>
                            Knob #2
                          </div>
                          <div>
                            23
                          </div>

                          <div className='col-span-3'>
                            Knob #3
                          </div>
                          <div>
                            23
                          </div>

                          <div className='col-span-3'>
                            Knob #4
                          </div>
                          <div>
                            23
                          </div>

                          <div className='col-span-3'>
                            T.Ambiente
                          </div>
                          <div>
                            23
                          </div>
                        </div>

                        <div className='mt-6 border-2 rounded-md p-2'>
                          <p>
                            <textarea disabled value='Texto'></textarea>
                          </p>
                        </div>
                      </AccordionPanel>
                    </AccordionItem>

                  </Accordion>

                </CardBody>
              </Card>


              <Card className='mt-4'>
                <CardBody>
                  <p> Mezcla </p>
                  <UnorderedList className='mb-8'>
                    {data.map(({ id, name }) => {
                      return <div className='grid grid-cols-4 gap-4' key={id}>
                        <ListItem color='green.500' className='col-span-3'>{name}</ListItem>
                        <p>20 Gr(s)</p>
                      </div>
                    })}
                  </UnorderedList>

                  <Accordion allowToggle>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box as='span' flex='1' textAlign='left'>
                            Configuración 1
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <div className='grid grid-cols-4'>
                          <div className='col-span-3'>
                            Knob #1
                          </div>
                          <div>
                            23
                          </div>

                          <div className='col-span-3'>
                            Knob #2
                          </div>
                          <div>
                            23
                          </div>

                          <div className='col-span-3'>
                            Knob #3
                          </div>
                          <div>
                            23
                          </div>

                          <div className='col-span-3'>
                            Knob #4
                          </div>
                          <div>
                            23
                          </div>

                          <div className='col-span-3'>
                            T.Ambiente
                          </div>
                          <div>
                            23
                          </div>
                        </div>

                        <div className='mt-6 border-2 rounded-md p-2'>
                          <p>
                            <textarea disabled value='Texto'></textarea>
                          </p>
                        </div>
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box as='span' flex='1' textAlign='left'>
                            Configuración 2
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <div className='grid grid-cols-4'>
                          <div className='col-span-3'>
                            Knob #1
                          </div>
                          <div>
                            23
                          </div>

                          <div className='col-span-3'>
                            Knob #2
                          </div>
                          <div>
                            23
                          </div>

                          <div className='col-span-3'>
                            Knob #3
                          </div>
                          <div>
                            23
                          </div>

                          <div className='col-span-3'>
                            Knob #4
                          </div>
                          <div>
                            23
                          </div>

                          <div className='col-span-3'>
                            T.Ambiente
                          </div>
                          <div>
                            23
                          </div>
                        </div>

                        <div className='mt-6 border-2 rounded-md p-2'>
                          <p>
                            <textarea disabled value='Texto'></textarea>
                          </p>
                        </div>
                      </AccordionPanel>
                    </AccordionItem>

                  </Accordion>

                </CardBody>
              </Card>

              <Divider className='my-6' />


              <p className='mb-4'>2024-05-12</p>
              <Card>
                <CardBody>
                  <p> Mezcla </p>
                  <UnorderedList className='mb-8'>
                    {data.map(({ id, name }) => {
                      return <div className='grid grid-cols-4 gap-4' key={id}>
                        <ListItem color='green.500' className='col-span-3'>{name}</ListItem>
                        <p>20 Gr(s)</p>
                      </div>
                    })}
                  </UnorderedList>

                  <Accordion allowToggle>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box as='span' flex='1' textAlign='left'>
                            Configuración 1
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <div className='grid grid-cols-4'>
                          <div className='col-span-3'>
                            Knob #1
                          </div>
                          <div>
                            23
                          </div>

                          <div className='col-span-3'>
                            Knob #2
                          </div>
                          <div>
                            23
                          </div>

                          <div className='col-span-3'>
                            Knob #3
                          </div>
                          <div>
                            23
                          </div>

                          <div className='col-span-3'>
                            Knob #4
                          </div>
                          <div>
                            23
                          </div>

                          <div className='col-span-3'>
                            T.Ambiente
                          </div>
                          <div>
                            23
                          </div>
                        </div>

                        <div className='mt-6 border-2 rounded-md p-2'>
                          <p>
                            <textarea disabled value='Texto'></textarea>
                          </p>
                        </div>
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box as='span' flex='1' textAlign='left'>
                            Configuración 2
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <div className='grid grid-cols-4'>
                          <div className='col-span-3'>
                            Knob #1
                          </div>
                          <div>
                            23
                          </div>

                          <div className='col-span-3'>
                            Knob #2
                          </div>
                          <div>
                            23
                          </div>

                          <div className='col-span-3'>
                            Knob #3
                          </div>
                          <div>
                            23
                          </div>

                          <div className='col-span-3'>
                            Knob #4
                          </div>
                          <div>
                            23
                          </div>

                          <div className='col-span-3'>
                            T.Ambiente
                          </div>
                          <div>
                            23
                          </div>
                        </div>

                        <div className='mt-6 border-2 rounded-md p-2'>
                          <p>
                            <textarea disabled value='Texto'></textarea>
                          </p>
                        </div>
                      </AccordionPanel>
                    </AccordionItem>

                  </Accordion>

                </CardBody>
              </Card>


              <Card className='mt-4'>
                <CardBody>
                  <p> Mezcla </p>
                  <UnorderedList className='mb-8'>
                    {data.map(({ id, name }) => {
                      return <div className='grid grid-cols-4 gap-4' key={id}>
                        <ListItem color='green.500' className='col-span-3'>{name}</ListItem>
                        <p>20 Gr(s)</p>
                      </div>
                    })}
                  </UnorderedList>

                  <Accordion allowToggle>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box as='span' flex='1' textAlign='left'>
                            Configuración 1
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <div className='grid grid-cols-4'>
                          <div className='col-span-3'>
                            Knob #1
                          </div>
                          <div>
                            23
                          </div>

                          <div className='col-span-3'>
                            Knob #2
                          </div>
                          <div>
                            23
                          </div>

                          <div className='col-span-3'>
                            Knob #3
                          </div>
                          <div>
                            23
                          </div>

                          <div className='col-span-3'>
                            Knob #4
                          </div>
                          <div>
                            23
                          </div>

                          <div className='col-span-3'>
                            T.Ambiente
                          </div>
                          <div>
                            23
                          </div>
                        </div>

                        <div className='mt-6 border-2 rounded-md p-2'>
                          <p>
                            <textarea disabled value='Texto'></textarea>
                          </p>
                        </div>
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box as='span' flex='1' textAlign='left'>
                            Configuración 2
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <div className='grid grid-cols-4'>
                          <div className='col-span-3'>
                            Knob #1
                          </div>
                          <div>
                            23
                          </div>

                          <div className='col-span-3'>
                            Knob #2
                          </div>
                          <div>
                            23
                          </div>

                          <div className='col-span-3'>
                            Knob #3
                          </div>
                          <div>
                            23
                          </div>

                          <div className='col-span-3'>
                            Knob #4
                          </div>
                          <div>
                            23
                          </div>

                          <div className='col-span-3'>
                            T.Ambiente
                          </div>
                          <div>
                            23
                          </div>
                        </div>

                        <div className='mt-6 border-2 rounded-md p-2'>
                          <p>
                            <textarea disabled value='Texto'></textarea>
                          </p>
                        </div>
                      </AccordionPanel>
                    </AccordionItem>

                  </Accordion>

                </CardBody>
              </Card>

            </CardBody>
          </Card>

          <div className='h-24'></div>
        </>
      }

      {
        currentPage === menu[3] &&
        <>
        <div className='mb-20'>
          <h1 className='mb-4 text-[3.5rem] mt-5 font-extrabold text-center text-[#369C67]'> Consultas </h1>
          <Card className='mx-4 mb-12'>
            <CardBody>
              <form action="">
                <div className='mb-8'>
                  <label htmlFor="product-selector">Buscar por</label>
                  <Select id="product-selector" placeholder='Seleccione'>
                    {[{ name: 'Knobs' }, { name: 'Mezcla' }].map(({ name }, id) => <option key={id} value='option1'>{name}</option>)}
                  </Select>

                </div>

                <div className='grid grid-cols-4 gap-y-3 mb-8'>
                  <div className='col-span-3'>
                    <p>Knob #1</p>
                  </div>
                  <div>
                    <Input placeholder='0' type='number' id="temperature-0" />
                  </div>
                  <div className='col-span-3'>
                    <p>Knob #2</p>
                  </div>
                  <div>
                    <Input placeholder='0' type='number' id="temperature-0" />
                  </div>
                  <div className='col-span-3'>
                    <p>Knob #3</p>
                  </div>
                  <div>
                    <Input placeholder='0' type='number' id="temperature-0" />
                  </div>
                  <div className='col-span-3'>
                    <p>Knob #4</p>
                  </div>
                  <div>
                    <Input placeholder='0' type='number' id="temperature-0" />
                  </div>
                </div>
              </form>

              <div className='text-center'>
                <Button colorScheme='green' className='w-[90%] lg:w-[95%]' height={12}>Buscar</Button>
              </div>
            </CardBody>
          </Card>

          <Card className='mx-4'>
            <CardBody>
              <p className='mb-8'>2024-07-19</p>

              <div>
                <UnorderedList className='mb-8'>
                  {data.map(({ id, name }) => {
                    return <div className='grid grid-cols-2 gap-4' key={id}>
                      <ListItem color='green.500' >{name}</ListItem>
                      <p>20 Gr(s)</p>
                    </div>
                  })}
                </UnorderedList>

                <UnorderedList className='mb-8'>
                  {[19,21,23].map((value, id) => {
                    return <div className='grid grid-cols-2 gap-4' key={id}>
                      <ListItem color='blue.500' >{value} grados</ListItem>
                      <p>12:00</p>
                    </div>
                  })}
                </UnorderedList>
              </div>

              <div className='grid grid-cols-4'>
                <div className='col-span-3'>
                  Knob #1
                </div>
                <div>
                  23
                </div>

                <div className='col-span-3'>
                  Knob #2
                </div>
                <div>
                  23
                </div>

                <div className='col-span-3'>
                  Knob #3
                </div>
                <div>
                  23
                </div>

                <div className='col-span-3'>
                  Knob #4
                </div>
                <div>
                  23
                </div>

                <div className='col-span-3'>
                  T.Ambiente
                </div>
                <div>
                  23
                </div>
              </div>

              <div className='mt-6 border-2 rounded-md p-2'>
                <p>
                  <textarea disabled value='Texto'></textarea>
                </p>
              </div>
            </CardBody>
          </Card>

        </div>
        </>
      }

      {/* MENU */}

      <div className='fixed bottom-0 h-14 bg-[#56b181] text-white z-10 w-full flex justify-around items-center p-2'>
        <div className='flex items-center' onClick={() => setCurrentPage(menu[0])}>
          <Image src={Checklist} alt='show products' />
        </div>
        <Divider orientation='vertical' />
        <div className='flex items-center ' onClick={() => setCurrentPage(menu[1])}>
          <Image src={Machine} alt='Go to extrusion' />
        </div>
        <Divider orientation='vertical' />
        <div className='flex items-center ' onClick={() => setCurrentPage(menu[2])}>
          <Image src={Watch} alt='Go to archive' />
        </div>
        <Divider orientation='vertical' />
        <div className='flex items-center ' onClick={() => setCurrentPage(menu[3])}>
          <Image src={Search} alt='Search Data' />
        </div>
      </div>

    </>
  );
}
