import Image from "next/image";
import { truncate } from "lodash";
import { Button, Container, Loading } from "../utils";

const HomeBlog = ({ blogData }) => {
  return (
    <>
      <Container className="pb-12" flex col alignCenter gap2>
        <section>
          <h3 className="font-bold text-[25px]">Our Blog</h3>
        </section>
        {blogData.length === 0 ? (
          <>
            <Loading />
          </>
        ) : (
          <Container flex justifyCenter gap3 wrap>
            {blogData?.map((product) => {
              const { id, title, description, image } = product;

              return (
                <Container className="w-[20rem] sm:w-[17rem] h-[28rem] sm:h-[26.5rem] rounded-lg shadow-xl" flex col gap1 key={id}>
                  <section>
                    <Image className="rounded-t-xl shadow-md w-full h-[14rem]" width="400" height="300" src={image} alt={title} />
                  </section>
                  <section className="flex justify-around ">
                    <p>{truncate(title, { length: 35 })}</p>
                  </section>
                  <section className="flex justify-around px-4 h-[4.5rem]">
                    <p>{truncate(description, { length: 75 })}</p>
                  </section>
                  <section className="flex justify-around">
                    <Button>See More →</Button>
                  </section>
                </Container>
              );
            })}
          </Container>
        )}
      </Container>
    </>
  );
};

export default HomeBlog;
