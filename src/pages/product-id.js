import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { ReactComponent as Chevron } from '../icons/navChevron.svg'
import { ReactComponent as Shopping } from '../icons/shopping-bag.svg'
import { ReactComponent as Leaf } from '../icons/leaf.svg'
import { ReactComponent as Droplet } from '../icons/droplet.svg'
import { ReactComponent as Message } from '../icons/message-circle.svg'
import { ReactComponent as Minus } from '../icons/minus.svg'
import { ReactComponent as Plus } from '../icons/plus.svg'
import { ReactComponent as Heart } from '../icons/heart.svg'
import { ReactComponent as HeartFav } from '../icons/heart-active.svg'

const ProductId = ({ product, label, isFav, setFav }) => {
    const [numberCard, setNumberCard] = useState(1)
    console.log(isFav, setFav)
    return (
        <>
            {product
                ?
                <>
                    <div className="p-5 bg-light">
                        <div className="flex flex-row justify-between mt-3">
                            <div className="h-6">
                                <Link to="/">
                                    <div>
                                        <Chevron/>
                                    </div>
                                </Link>
                            </div>

                            <div className="h-6">
                                <Link to="/card">
                                    <div>
                                        <Shopping/>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <Tab.Group>
                            <Tab.List className="flex flex-col mt-6 cursor-pointer ">
                                <Tab className="mt-3"
                                >
                                    <img src={product.pictures[0]} alt={product.pictures[0]}
                                         style={{ height: '90px', width: '90px' }}
                                         className="rounded"
                                    />
                                </Tab>
                                <Tab className="mt-3"
                                >
                                    <img src={product.pictures[1]} alt={product.pictures[1]}
                                         style={{ height: '90px', width: '90px' }}
                                         className="rounded"
                                    />
                                </Tab>
                                <Tab className="mt-3"
                                >
                                    <img src={product.pictures[2]} alt={product.pictures[1]}
                                         style={{ height: '90px', width: '90px' }}
                                         className="rounded"
                                    />
                                </Tab>
                            </Tab.List>
                            <Tab.Panels>
                                <Tab.Panel>
                                    <img src={product.pictures[0]} alt={product.pictures[0]}
                                         style={{ height: '290px', width: '300px' }}
                                         className="rounded custommargin"
                                    />
                                </Tab.Panel>
                                <Tab.Panel>
                                    <img src={product.pictures[1]} alt={product.pictures[1]}
                                         style={{ height: '290px', width: '300px' }}
                                         className="rounded custommargin"
                                    />
                                </Tab.Panel>
                                <Tab.Panel>
                                    <img src={product.pictures[2]} alt={product.pictures[1]}
                                         style={{ height: '290px', width: '300px' }}
                                         className="rounded custommargin"
                                    />
                                </Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group>
                    </div>

                    <div className="p-3 rounded-t-xl bg-accent">
                        <p className="text-t-secondary font-bold ">
                            {label}
                        </p>
                        <p className="font-bold text-lg mt-3">
                            {product.label}
                        </p>
                        <div className="flex flex-row justify-between mt-3">
                            <div className="my-3 text-primary font-bold">
                                IDR{' '}{product.price}
                            </div>
                            <div className="flex flex-row border-solid border-2 rounded-2xl ">
                                <Minus onClick={() => setNumberCard(numberCard - 1)}
                                       className="mt-2 mr-2 cursor-pointer"/>
                                <p className="mt-2">
                                    {numberCard}
                                </p>
                                <Plus onClick={() => setNumberCard(numberCard + 1)}
                                      className="mt-2 ml-2 cursor-pointer"/>
                            </div>
                        </div>

                        <div className="flex flex-row justify-between mt-3">
                            <div className="bg-light2 rounded p-2"
                            >
                                <Leaf/>
                            </div>
                            <div className="bg-light2 rounded p-2"
                            >
                                <Droplet/>
                            </div>
                            <div className="bg-light2 rounded p-2"
                            >
                                <Message/>
                            </div>
                            <div className="bg-light2 rounded p-2"
                            >
                                {isFav
                                    ?
                                    <HeartFav onClick={() => setFav(false)}/>
                                    :
                                    <Heart onClick={() => setFav(true)}/>
                                }
                            </div>
                        </div>
                        <p
                            className="mt-3 text-center bg-primary rounded-2xl font-bold text-accent p-3"
                        >
                            Add to card
                        </p>
                    </div>
                </>
                :
                <Link to="/">ERROR</Link>
            }
        </>

    )
}

export default ProductId
