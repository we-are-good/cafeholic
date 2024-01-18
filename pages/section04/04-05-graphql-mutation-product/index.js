import { useMutation, gql } from '@apollo/client'

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!){      #변수의 타입 적는곳 (플레이그라운드랑 같은타입으로 적어야함)
        createProduct(seller: $seller, createProductInput: $createProductInput){            #실제 우리가 전달할 변수 적는 곳
        _id
        number
        message
        }
    }
`


export default function GraphqlMutationPage(){
    const [createProduct] = useMutation(CREATE_PRODUCT)

    const onClickSubmit = async () =>{
        const result = await createProduct({
            variables:{
                seller: "dd",
                createProductInput:{
                    name:"마우스",
                    detail:"dd",
                    price: 3000
                }
            }
        })
        console.log(result)
    }




    //한줄일때 괄호() 필요없음
    return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    
}