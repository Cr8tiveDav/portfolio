import React from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Button } from '../ui/button';
import { IoIosInformationCircleOutline } from 'react-icons/io';

const ProjectDetailsDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size='icon-lg'
          variant='outline'
          className='cursor-pointer hover:text-blue-700'
        >
          <IoIosInformationCircleOutline />
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-3xl md:max-w-4xl lg:max-w-5xl h-[85vh] max-h-[85vh] overflow-y-auto'>
        <DialogHeader>
          <DialogTitle>Project Details</DialogTitle>
          <DialogDescription>
            This is a detailed view of the project. Lorem ipsum dolor sit amet,
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            earum sed molestias laboriosam perspiciatis vitae perferendis
            aliquid voluptatibus incidunt possimus sapiente ea non quod quam
            officia asperiores cumque, consequuntur ut? Accusamus dignissimos
            neque modi quia minus excepturi? Aliquam ullam consequuntur rem fuga
            corrupti numquam nulla tenetur provident esse incidunt in corporis
            qui rerum non similique dolores minus commodi, nesciunt quas. Optio,
            ab doloremque consequatur, omnis distinctio maiores fuga sapiente,
            repudiandae tempore voluptatem exercitationem et sunt voluptates.
            Dolore hic voluptates quibusdam nemo, ipsam, tenetur ducimus magnam
            animi accusamus corporis aliquid accusantium. Dicta voluptas quia
            aspernatur? Voluptas iste provident culpa cupiditate perferendis, ad
            doloremque libero exercitationem quaerat neque repellat atque ipsa
            ratione rerum dolorum expedita minus natus illum in nulla veritatis
            molestias. Reiciendis, accusantium eos! Dolore voluptate soluta quo
            illo itaque error in esse, earum odit corrupti id tempora delectus
            blanditiis neque eius cum, dignissimos, veritatis ipsam repellat
            labore ducimus nobis hic. Ipsum, corrupti debitis nihil consectetur
            voluptatibus id! Nobis maxime quidem quod et velit, possimus ex
            consequuntur. Commodi quidem blanditiis, maiores molestias porro
            sunt repellat ab a rerum repudiandae nihil incidunt? Dignissimos
            praesentium eaque sint nobis reiciendis sequi eius ad possimus
            inventore eum consequuntur, ullam ducimus odio qui explicabo id vero
            perferendis minima veniam facere quo quia illo numquam. Ex, quod!
            Nihil harum ratione minima animi quisquam, illo eum, vel nostrum
            cupiditate fuga aspernatur ullam architecto alias at! Iusto eligendi
            nisi ex animi, error hic sequi vero quaerat cum minus quisquam.
            Laudantium, asperiores quibusdam soluta fugiat vero nesciunt cumque
            accusantium nostrum, explicabo totam ea quo omnis sed nulla!
            Pariatur architecto magnam, soluta nisi cupiditate accusamus
            aspernatur dolor ex impedit quaerat? Placeat. Ducimus assumenda
            voluptatem sapiente saepe, corrupti illo ipsam vitae doloribus
            dolores iste qui id esse, illum ea. Quidem fugit optio vel! Et
            voluptas aperiam maiores quod fugiat. Quam, quidem placeat!
            Doloremque, iusto! Minima cupiditate harum ipsum? Molestias autem
            velit dolores consequatur vitae perspiciatis excepturi illo omnis
            numquam, deleniti tenetur corporis, provident, quod at earum? Quis
            est hic nulla nesciunt perspiciatis? Impedit sed laudantium officiis
            incidunt, assumenda enim fugiat at atque deserunt beatae quibusdam
            possimus aliquid commodi eligendi quidem vitae labore ratione
            corrupti dolorum ipsam officia dolorem amet. Voluptatem, aperiam
            incidunt. Animi, dolorem! Harum deserunt vero corrupti at, dolore
            ullam qui distinctio quis tempore dolores accusantium ad, aliquid
            laudantium sit? Maxime provident aliquam doloremque laudantium?
            Eaque, impedit incidunt. Dolore, hic minus. Voluptates sed expedita
            id ut, quos provident a vero facere labore, exercitationem ducimus
            consectetur est. Sit quisquam corrupti animi illum hic voluptatibus,
            labore, esse quas natus praesentium ipsum sed totam? Ipsa adipisci
            aliquid ratione nobis quas dolorem reiciendis totam alias corrupti
            sapiente molestias, quo laudantium expedita autem quibusdam
            consequuntur laborum natus tenetur impedit accusantium. Dolorem
            culpa quos dolores ipsam voluptate? Iure error quod laborum culpa
            totam, quia fugiat ipsam alias! Vitae aliquam officiis quisquam
            error libero mollitia voluptatem architecto sed. Eaque quae pariatur
            officia, maxime aut veniam quaerat quibusdam ab? Officia, harum
            mollitia. Sit, mollitia rerum quasi perspiciatis accusantium est vel
            doloribus explicabo iste excepturi, praesentium voluptatibus aliquid
            molestias delectus inventore corrupti nesciunt libero eum iure
            pariatur iusto error modi? Exercitationem inventore quaerat, tenetur
            impedit aperiam beatae? Voluptate necessitatibus ex inventore
            molestias sit architecto id minima natus, nobis illo assumenda. Eius
            perspiciatis commodi accusantium aliquam fugit aliquid temporibus
            dignissimos. Amet. Eius quisquam, dignissimos expedita libero at,
            autem velit fuga atque enim est placeat dolorem nesciunt numquam
            mollitia aperiam quae vero molestiae? Unde mollitia maiores commodi
            nam molestias! Laborum, reiciendis ad! Veritatis dolorem officia
            nisi id praesentium omnis impedit laboriosam amet corporis, ipsa
            architecto, accusantium assumenda sed sunt quod atque. Repellendus
            deleniti facere asperiores vitae amet aliquam qui maiores mollitia
            illum. Commodi voluptatum facere aut suscipit enim aliquam mollitia
            voluptates exercitationem at molestiae nobis qui in, quis aspernatur
            ratione nisi ducimus, explicabo quos voluptate? Minus, fuga
            explicabo eum dolore voluptas consequatur! Officiis minima,
            aspernatur voluptas, quae et amet excepturi qui vero iste inventore,
            molestiae nulla dignissimos. Architecto dolore totam deleniti, natus
            tenetur consequatur labore repellat omnis aut blanditiis doloremque?
            Odio, minima! Quam aperiam atque deleniti quaerat harum maiores
            obcaecati porro repellat accusamus perspiciatis, odio, nisi tempora
            doloremque sequi. Explicabo, dicta necessitatibus. Beatae commodi
            aut similique vitae dolorum nemo distinctio expedita exercitationem.
            Error nihil ullam minima suscipit ex. Architecto nostrum
            perspiciatis commodi error! Explicabo magnam corporis molestias
            laboriosam hic modi possimus nulla, consequuntur alias asperiores
            similique rerum ipsum perspiciatis minus ipsam sunt! Libero voluptas
            quasi architecto, consectetur eum earum aspernatur sunt tenetur
            molestias. Minima rerum quam ipsam eaque nisi, sed iusto, minus ad
            enim rem, placeat maiores deleniti dolorem adipisci magnam
            reiciendis? Eveniet, repudiandae. Possimus repellat eos quia iste,
            tenetur ut nostrum soluta iusto neque quae dolorum a tempore
            repudiandae labore assumenda, aut quaerat. Soluta quas atque non
            totam expedita culpa accusantium. Expedita veritatis inventore
            dolores quam nam, nemo nobis? Impedit recusandae accusamus dolore!
            Nisi dolorum dolores ipsam, repellendus quidem autem quia dicta
            praesentium, natus ullam facere minima earum labore repellat nam.
            Quaerat iste, nesciunt mollitia repudiandae temporibus autem cumque
            laudantium tenetur, consequatur quidem minima earum quo totam
            accusantium doloremque quibusdam officiis consectetur veniam
            voluptas aspernatur numquam nemo. Obcaecati aspernatur ea expedita.
            Officiis eaque rem eveniet, atque ea dolorem non minus deleniti
            quibusdam debitis officia nisi cumque dicta! Ducimus quos quidem eos
            qui quia numquam, ea tenetur temporibus, mollitia dolorum excepturi
            est. Voluptate ab corporis non. Porro expedita, a deleniti rem ullam
            magnam impedit reiciendis, perspiciatis doloribus ducimus aut
            pariatur in cupiditate autem est suscipit cum iure eveniet! Eligendi
            provident vel dolorum. Soluta corporis id modi eveniet, aspernatur
            illo facilis nihil necessitatibus provident excepturi incidunt autem
            esse adipisci totam eius atque facere laboriosam porro beatae. Aut
            blanditiis laboriosam assumenda cupiditate earum veritatis. Libero
            reprehenderit quasi tempore corporis nisi? Sit, minus iste
            praesentium odio vitae magni quisquam doloremque ex labore neque
            illo id natus optio rerum nihil impedit libero animi error porro
            reiciendis. Culpa, quas repellat? Explicabo aliquam consequuntur
            eligendi quo dolores delectus amet quisquam, similique nemo corporis
            voluptas incidunt cupiditate eveniet velit esse doloremque ab libero
            distinctio voluptates, voluptatem natus, porro repudiandae!
            Temporibus optio quia atque, tempora pariatur hic nam facilis saepe,
            quo, dolor provident sapiente quidem? Repellat, in corrupti non,
            vero molestiae temporibus illum atque repudiandae dicta officiis
            libero porro eum. Aspernatur qui odit totam provident beatae cum,
            ipsum deserunt voluptas. Quasi eveniet veniam non aperiam
            exercitationem sint facilis incidunt fugiat, a eum enim,
            perspiciatis laudantium iste autem ipsa inventore ipsum! Incidunt
            eum voluptatum cumque nesciunt reprehenderit illo natus veritatis,
            possimus aspernatur reiciendis sit eligendi delectus repellendus at
            dolores nemo eveniet fugit laborum ullam! Odio earum molestiae
            repellat, cum omnis neque! Pariatur minus reiciendis fuga tempore
            est dignissimos esse maiores asperiores, perferendis nemo aut
            tenetur necessitatibus earum fugiat consectetur omnis quasi atque
            porro provident beatae error quas iusto. Ducimus, cum alias. Eaque
            autem obcaecati aperiam hic, atque totam, assumenda fuga modi illum
            omnis dolore eius vel sed exercitationem debitis ratione voluptas
            itaque illo dignissimos quis reprehenderit architecto amet ex ipsa.
            Tempora? Blanditiis sit quasi debitis tempora sunt veritatis impedit
            inventore cupiditate, expedita nemo asperiores corrupti, quos
            delectus quia non numquam. Sint porro numquam facilis voluptates
            voluptate, magnam illum culpa! Nam, magni? Quasi ipsam voluptatibus
            doloremque eos quo necessitatibus tempore? Sit ut animi odio
            officia! Expedita tempore porro facere consequatur totam doloremque
            cum eos quod ab dignissimos, accusantium hic esse quidem nostrum.
            Natus quisquam illo assumenda dolore laborum tempora culpa suscipit
            quo consectetur quam nemo minus voluptatem perferendis accusamus
            accusantium deserunt doloremque sed ad, numquam vel! Nulla vel odio
            aperiam quo id! Amet modi laudantium, laborum quam reiciendis quasi
            ut. In, omnis eligendi, delectus ex totam vel consectetur quas
            veritatis explicabo iusto, dolore harum beatae temporibus recusandae
            sapiente quae natus minima vitae. At rem temporibus quisquam est
            eum, reprehenderit esse facere vero aliquid, architecto voluptate ex
            repudiandae explicabo quis praesentium animi ad ipsam tempore sed
            deserunt! Perspiciatis quisquam adipisci maiores nisi laboriosam!
            Eius aperiam quas quo voluptate obcaecati sequi voluptatem
            asperiores aliquid officia repudiandae natus, quaerat explicabo sed!
            Minima soluta, quis facilis fugit quas in non laboriosam id?
            Suscipit possimus a similique. Officiis, dignissimos dolor porro
            maxime voluptatum, temporibus vel a excepturi cum, saepe velit eos
            itaque illo assumenda reprehenderit illum ipsa explicabo deserunt
            mollitia. Impedit neque, excepturi blanditiis omnis optio nisi?
            Assumenda, repudiandae, laudantium natus illo ullam exercitationem
            soluta velit nisi quaerat recusandae corrupti ratione quo deserunt
            veniam esse tempora, consequatur cum cumque eligendi nemo quas
            facilis quia! Ex, quod quisquam. Tenetur iusto nesciunt saepe dolore
            molestiae perspiciatis minus rem quasi repudiandae et eius
            reprehenderit nam autem enim corporis, exercitationem omnis optio
            similique amet doloremque, eos pariatur vero cum! Commodi, dolores.
            Numquam asperiores eum accusantium quod mollitia illum, temporibus,
            cum totam nihil dolore reiciendis maxime inventore culpa laudantium
            adipisci vero dolorum, tempore cupiditate. Eum voluptas dignissimos
            sapiente nobis soluta, cum hic. In tempora repellat nostrum rem eius
            dicta, nobis hic dolorem iure quo obcaecati. Exercitationem
            aspernatur reiciendis perspiciatis, assumenda nihil, aliquam
            reprehenderit pariatur, perferendis recusandae quo non atque. Fuga,
            animi architecto? Dicta deserunt aut vel nobis? Qui iusto
            consectetur inventore sunt! Natus reprehenderit odio, quod cumque
            architecto mollitia unde minima deserunt impedit tempora dolorem?
            Necessitatibus dolor quisquam placeat assumenda quaerat dignissimos!
            Nemo officia quis beatae iusto consectetur animi eius eaque natus
            qui labore excepturi voluptatem explicabo ut doloremque, nesciunt
            dignissimos recusandae omnis quibusdam quae alias voluptate et ab
            totam vel. Corrupti. Animi incidunt fugit ex sint ipsam minima
            eveniet vel nihil nam consequuntur sequi quos, dolorum labore,
            voluptatem aliquid possimus. Reiciendis quo tempora nam dolorum iste
            officia tempore eum iure eius? Fuga dicta ratione quo! Reprehenderit
            possimus voluptates, amet delectus labore pariatur necessitatibus
            modi aspernatur quae esse accusamus similique minus nisi eligendi
            quisquam aliquid a id dolorem vero iusto fugit iure! Quia beatae,
            tempora sint expedita atque iure laudantium pariatur ipsum impedit
            debitis rem porro? Nemo, modi? Aperiam, dolorem possimus deserunt
            odio reprehenderit illo laborum nulla fugiat perferendis. Quos,
            numquam laudantium? Voluptatem, quam cum reprehenderit, ad alias
            nihil quae voluptates deserunt hic, praesentium qui molestias
            delectus inventore laborum quaerat iure mollitia unde. Voluptate,
            facilis cumque quo earum ut vel eum porro? Quod officiis velit,
            eligendi eius beatae magnam sint quam neque! Numquam minus
            aspernatur iste? Incidunt fugit ex, corporis praesentium nesciunt
            officia qui ab reprehenderit dolore optio autem excepturi aspernatur
            eius. Corporis impedit, corrupti rerum incidunt ratione repudiandae
            repellat itaque cum dolorem ea temporibus quae beatae magnam quos,
            nisi alias voluptatibus distinctio nobis maxime ullam asperiores
            velit. Obcaecati reiciendis nisi sint. Delectus sapiente, quo
            molestias blanditiis excepturi iure voluptatem iusto impedit
            temporibus nesciunt libero rem cumque reprehenderit eveniet. Dolor
            odio, facere cum sapiente iure labore esse debitis delectus,
            voluptatibus eligendi commodi! Vero voluptates debitis rem quas
            veritatis dolorem enim asperiores ea, delectus nobis aperiam
            pariatur suscipit voluptatum illum corporis quam esse id nesciunt
            beatae tenetur cupiditate. Animi itaque ut iure libero. Magni rerum
            molestiae deleniti quisquam natus omnis numquam cupiditate
            obcaecati. Aspernatur nam doloribus voluptas quasi officia, est
            laboriosam debitis deleniti pariatur, voluptates, rerum facilis
            autem. Fugit in nulla velit eius? Ipsam, assumenda. Ipsam doloremque
            eos quod corporis eveniet id, in rem iure et? Natus ea corrupti
            rerum facere dolorum non? Enim ex ipsa doloremque nihil corrupti
            exercitationem iure quisquam deserunt. Sapiente nesciunt esse natus.
            At minus esse aspernatur cum, nemo quibusdam atque illum, placeat
            sunt quae repudiandae error iusto delectus saepe enim veritatis
            voluptatum sapiente. Accusamus dicta repellendus a suscipit? Rem
            vitae repudiandae eum unde reiciendis, beatae veniam molestiae omnis
            cupiditate quo deserunt nisi soluta quasi maxime labore tempora,
            voluptatibus doloribus porro quia vero qui sunt, expedita inventore!
            Nemo, quasi. Eos voluptatum maiores sit minus quod enim commodi
            aliquam quo autem, sequi obcaecati quis magni consectetur ullam
            assumenda? Recusandae quisquam ea quis eaque iste, qui animi atque.
            Rerum, eos commodi. Perspiciatis, optio id! Neque itaque quibusdam,
            harum laborum facilis aliquam in explicabo fuga adipisci, esse sit
            ad ratione tempora nulla obcaecati nobis. Ex veritatis, impedit
            corrupti repellat natus aut quo. Tenetur molestias cumque nam
            cupiditate voluptate quaerat in maxime fugit minima debitis delectus
            saepe quam ducimus dicta possimus, cum omnis harum voluptatum
            recusandae ab enim facilis quos magnam veniam. Corrupti! Omnis
            libero necessitatibus non expedita totam, amet consectetur dolores
            sequi delectus, praesentium at ea iusto accusantium consequatur? A
            eaque asperiores, iste autem molestiae consequuntur ab dolores
            dolorem, quas culpa iusto? Voluptas, pariatur. Minima sit doloremque
            natus dignissimos nemo, expedita ipsam suscipit, deleniti aliquam
            cumque ipsa distinctio. Voluptates repellendus dolorem consequuntur
            reiciendis, quisquam animi adipisci perspiciatis dolores
            perferendis, quas impedit architecto? Pariatur quibusdam
            perspiciatis doloribus minus dolores amet, deleniti voluptatibus a,
            iste cumque veniam ullam eaque consectetur id consequuntur
            consequatur ex, nesciunt repellat vero sint quaerat ducimus. Labore
            ut aliquid magni! Nihil reprehenderit deserunt obcaecati magni quia
            fuga quas optio eius est illo quam adipisci, inventore modi tempore
            blanditiis eos quidem! Debitis sit vel ratione exercitationem
            maiores veniam quaerat voluptas eius. Eum, culpa! Perspiciatis nihil
            vel dolorum eligendi assumenda! Provident aut ab perspiciatis facere
            quos fugit assumenda laborum placeat! Veniam accusamus possimus quas
            voluptates, eveniet facere modi nostrum dolorum laborum neque. Ipsa
            laboriosam officia suscipit quibusdam hic iure necessitatibus neque
            asperiores magni nisi, amet veniam non minima nihil magnam illum?
            Nam consequatur temporibus perspiciatis ducimus ratione fuga sit
            sunt veniam alias! Quam dolorem dolores temporibus? Provident,
            nostrum dicta ipsa natus est impedit consectetur rem quis sed
            doloremque ad non odit debitis eaque eum nisi quas earum aliquam,
            dolor quia deleniti commodi. Corrupti quibusdam laboriosam unde
            quisquam blanditiis. Suscipit nisi dolorum blanditiis aperiam quasi
            non ad, natus fugit unde reprehenderit eveniet neque vitae quae
            provident perspiciatis. Quisquam tenetur magnam similique? Qui,
            ipsam. Qui deserunt, commodi, eius accusantium iure architecto
            repudiandae quos eos iste aliquam ab quia rerum ea ullam corrupti
            sunt possimus aperiam quisquam magni porro! Nesciunt illo error
            deleniti ut architecto? Similique, magni rem optio dignissimos eaque
            eius libero est porro fuga, tempora, quo labore asperiores fugiat
            dolores quidem velit at dolore accusantium minima repudiandae rerum
            obcaecati earum laborum. Recusandae, ea. Ad deserunt natus, ut
            cumque vero vitae beatae asperiores, sequi molestiae exercitationem
            consequatur, esse dignissimos dicta architecto voluptas dolor
            pariatur totam itaque quasi? Ducimus saepe nesciunt odio tenetur,
            dolorem quos! Qui, assumenda quod. Nihil rerum sunt consequuntur
            repellat quidem optio soluta, dicta ipsam quod quas id ex assumenda
            sed dolorum unde! Vero harum nihil recusandae possimus nesciunt,
            facere voluptates delectus? Laborum libero, ullam, placeat
            cupiditate facilis tempora debitis perferendis saepe a, est amet.
            Explicabo molestiae voluptate animi minima atque aliquid eaque
            consequatur et eveniet distinctio officia repudiandae, reiciendis
            dolorem aspernatur. Saepe quo possimus et pariatur deserunt
            distinctio eos accusamus molestias est, hic autem magnam magni
            temporibus repellat ipsam? Enim quidem fugiat dolor nisi
            necessitatibus consectetur ipsa hic asperiores saepe soluta. Ab
            saepe inventore rerum voluptates distinctio et consequatur earum
            beatae quos vero ipsa ad maiores dolorem minima, expedita error
            vitae, nesciunt ducimus eaque delectus commodi? Accusantium magni
            asperiores esse officia. Modi, omnis? Totam animi assumenda quam
            harum aperiam fugiat sed error earum! Accusamus atque aspernatur,
            ipsum, temporibus totam aliquam illo inventore ea nam assumenda eius
            laborum sequi ducimus minus ab. Voluptate quod officiis a asperiores
            odio? Libero distinctio asperiores nobis beatae quibusdam voluptate
            excepturi voluptatibus quis amet cupiditate magnam rerum,
            perferendis similique. Numquam repellat placeat, eum unde quas
            corrupti aut. Fugiat asperiores alias ipsam exercitationem culpa
            cumque est accusamus optio nisi? Maiores asperiores cumque eaque ut
            mollitia dolorum nobis pariatur laborum a dolor, iste numquam
            tempore rerum ea officiis facilis? Perferendis animi sequi suscipit
            qui! Possimus, obcaecati repudiandae! Excepturi earum neque placeat
            provident nulla. Consectetur ab obcaecati praesentium atque
            blanditiis quaerat dolorem est beatae deserunt. Exercitationem
            aperiam unde omnis accusamus. Pariatur dolorem hic corrupti aut
            nisi, explicabo enim asperiores deleniti cum. Totam nihil fugiat
            consequatur. Nihil tempora, voluptas distinctio voluptate neque
            deleniti dolore voluptates non sequi ipsum explicabo. Hic, cum!
            Nesciunt hic saepe, itaque culpa nemo ipsum neque? Aspernatur,
            tempore asperiores, ea quas esse beatae architecto ipsa totam
            doloribus maiores quaerat accusamus quae iste ut vel corporis
            blanditiis magnam facilis. At eius suscipit odit reiciendis, commodi
            non eos alias perspiciatis est quae facere, modi labore laboriosam
            quaerat iure ex. Alias ut quidem dolores tempora maxime in modi
            libero ducimus commodi. Quam fugit, ipsa possimus sint impedit
            temporibus id dolorem, voluptatibus dolores qui nostrum? Animi quis
            accusantium culpa suscipit fugiat quae quas iusto distinctio totam
            sint. Quidem ullam ut distinctio quae? Est ullam fuga corrupti et
            nesciunt maxime qui dolor! Ipsa et cupiditate harum laboriosam ea!
            Veniam quia, deserunt nesciunt magni, voluptas voluptatem commodi
            ipsum ea laborum ipsa eveniet blanditiis aliquam. Voluptatibus
            reiciendis architecto eveniet fugiat, aspernatur exercitationem
            facilis excepturi. Mollitia vitae tempore tenetur qui saepe facilis
            cum adipisci ipsam accusantium debitis, eligendi nisi! Iure rem
            facere sit, similique iusto praesentium! Temporibus, sed. Dicta
            repellendus delectus facilis! At laborum distinctio, nam delectus
            nisi saepe doloremque nulla. Recusandae, inventore consectetur quae
            assumenda placeat doloremque nam est aliquid laudantium perspiciatis
            fugit natus atque. Nam quisquam blanditiis voluptate praesentium
            doloremque ex cumque dolorem veritatis eum ut, nobis magnam,
            obcaecati facere mollitia quia ab repudiandae quod deleniti magni
            iste esse earum. Perspiciatis eum possimus saepe. Ea rerum nobis
            adipisci perspiciatis molestiae! Sapiente fugit ducimus debitis
            dolore rem itaque distinctio exercitationem, quae, saepe libero
            repellendus quibusdam officia molestias corporis laborum ratione eum
            mollitia repellat quos laudantium. Sequi eligendi quae dolor magni
            in aperiam ex voluptate nostrum nemo, ipsum, dicta vitae quo magnam
            quibusdam consequuntur fugit, perspiciatis minima. Nihil sed debitis
            nulla iusto deleniti aperiam suscipit expedita? Doloremque
            praesentium quam distinctio asperiores fuga atque dolor dolore
            similique molestiae rerum cum earum iste, molestias quas explicabo?
            Neque, facere. Vel laborum reprehenderit corrupti expedita voluptas
            tempora ab debitis distinctio? Rerum, eos. Dolore molestiae eius eos
            iusto et minus laboriosam dignissimos consequuntur quibusdam
            veritatis magnam unde, perferendis quidem alias reiciendis, rerum
            quam debitis quia, expedita delectus sequi a nihil. Eligendi! Id
            quam sint laborum possimus corrupti deleniti animi dicta nihil
            magnam cumque? Sit quas debitis, nihil minus accusamus itaque nisi
            maiores laboriosam nobis repellendus tenetur officiis
            exercitationem, aut rerum suscipit! Aliquam possimus cumque mollitia
            minus animi incidunt asperiores, numquam ea distinctio velit
            praesentium error fugit reiciendis delectus. Eaque delectus
            assumenda nesciunt quos fuga numquam, molestias eveniet doloremque.
            Ex, eos animi. Atque, eaque quos quam porro a corrupti ipsam
            accusamus? Optio dolorem fuga harum laboriosam eligendi iste sit
            nesciunt, suscipit ratione necessitatibus tempore dolorum iusto
            rerum voluptates, cum omnis officia cupiditate?
          </DialogDescription>
        </DialogHeader>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {/* Project details content would go here */}
          <p>test</p>
          <p>test</p>
          <p>test</p>
        </div>
        <DialogFooter>{/* <DialogClose>Close</DialogClose> */}</DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailsDialog;
