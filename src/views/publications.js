import React from "react"
import PublicationsView from "../components/publication-view"
export default function Publications() {
  return (
    <div class="ml-auto mr-auto w-8/12">
      <h1 class="text-drexel-blue font-bold text-xl text-center">
        Publications
      </h1>
      <br />
      <p class="text-drexel-blue">
        This material is presented to ensure timely dissemination of scholarly
        and technical work. Copyright and all rights therein are retained by
        authors or by other copyright holders. All persons copying this
        information are expected to adhere to the terms and constraints invoked
        by each author's copyright. In most cases, these works may not be
        reposted without the explicit permission of the copyright holder.
      </p>
      <br />
      <p class="text-drexel-blue">
        Citation indices can be found{" "}
        <a
          class="font-bold hover:underline"
          href="https://scholar.google.com/citations?user=NJx3LncAAAAJ&hl=en"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </p>
      <br />
      <h1 class="text-drexel-blue font-bold text-xl">Edited Journals</h1>
      <br />
      <PublicationsView
        citation="Bass, E. J. ed. (2016). IEEE Transactions on Human-machine Systems: Year
        in Review for 2015, IEEE Transactions on Human-machine Systems, 46(1),
        1-8."
        pdfLink="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7389484"
        sourceLink="https://ieeexplore.ieee.org/document/7389484"
        source="IEEE">
      </PublicationsView>
      <br />
      <PublicationsView
        citation="Bass, E. J. ed. (2015). IEEE Transactions on Human-machine Systems: Year
        in Review for 2014, IEEE Transactions on Human-machine Systems, 46(1),
        1-8."
        pdfLink="http://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7008633"
        sourceLink="http://ieeexplore.ieee.org/document/7008633/"
        source="IEEE">
      </PublicationsView>
      <br />
      <PublicationsView
        citation="Bass, E. J. ed. (2014). IEEE Transactions on Human-machine Systems: Year
        in Review for 2013, IEEE Transactions on Human-machine Systems, 46(1),
        1-8."
        pdfLink="http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=6714622"
        sourceLink="http://ieeexplore.ieee.org/document/6714622/"
        source="IEEE">
      </PublicationsView>
      <br />
      <PublicationsView
        citation="Bass, E. J. ed. (2013). IEEE Systems, Man, and Cybernetics Society's
        continuing legacy in human-machine systems, IEEE Transactions on
        Human-machine Systems, 46(1), 1-8."
        pdfLink="http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=6392959"
        sourceLink="http://ieeexplore.ieee.org/document/6392959/"
        source="IEEE">
      </PublicationsView>
      <br />
      <h1 class="text-drexel-blue font-bold text-xl">
        Special Journal Issues Edited
      </h1>
      <br />
      <PublicationsView
        citation="Bisantz, A. M., Bass, E.J. and Ockerman, J.J. eds. (2012). Editors'
        introduction to the special issue on innovations in cognitive
        engineering and decision making, Part I, Journal of Cognitive
        Engineering and Decision Making, 6(1), 3-4."
        pdfLink="http://cci.drexel.edu/faculty/ebass/publications/files/JCEDM2012PartI.pdf"
        sourceLink="http://journals.sagepub.com/doi/abs/10.1177/1555343411434301"
        source="SAGE">
      </PublicationsView>
      <br />
      <PublicationsView
        citation="Bisantz, A. M., Bass, E.J. and Ockerman, J.J. eds. (2012). Editors'
        introduction to the special issue on innovations in cognitive
        engineering and decision making, Part II, Journal of Cognitive
        Engineering and Decision Making, 6(2), 139-140."
        pdfLink="http://cci.drexel.edu/faculty/ebass/publications/files/JCEDM2012PartII.pdf"
        sourceLink="http://journals.sagepub.com/doi/full/10.1177/1555343412440687"
        source="SAGE">
      </PublicationsView>
      <br />
      <h1 class="text-drexel-blue font-bold text-xl">Book Chapters</h1>
      <br />
      <PublicationsView
        citation="Bolton, M. L. & Bass, E. J. (2017). Enhanced Operator Function Model (EOFM): A Task Analytic Modeling Formalism for Including Human Behavior in the Verification of Complex Systems. In Weyers, B., Bowen, J., Dix, A., & Palanque, P. (Eds.), The Handbook of Formal Methods in Human-Computer Interaction (pp. 343-377). Gewerbestrasse: Springer International. "
        pdfLink="http://fhsl.eng.buffalo.edu/publications/chp_10.1007_978-3-319-51838-1_13.pdf"
        sourceLink="https://link.springer.com/chapter/10.1007%2F978-3-319-51838-1_13"
        source="SpringerLink">
      </PublicationsView>
      <br />
      <PublicationsView
        citation="Smith, P. J. & Bass, E. J. (2017). Distributed work in the National Airspace System: Traffic flow management and airline operations control. In S. Landry (Ed.) Handbook of Human Factors in Air Transportation Systems. CRC Press. (pp. 107-114)"
        pdfLink="https://www.taylorfrancis.com/books/edit/10.1201/9781315116549/handbook-human-factors-air-transportation-systems-steven-landry"
        sourceLink="https://www.crcpress.com/Handbook-of-Human-Factors-in-Air-Transportation-Systems/Landry/p/book/9781466572645"
        source="Routledge">
      </PublicationsView>
      <br />
      <PublicationsView
        citation="Bolton, M. L., & Bass, E. J. (2011). Comparing perceptual judgment and subjective measures of spatial awareness. In E. Salas & A. S. Dietz (Eds.), Situational Awareness: Critical Essays on Human Factors in Aviation (pp. 211-221). Surrey: Ashgate. Reprint of Bolton, M. L. & Bass, E. J. (2009). Comparing perceptual judgment and subjective measures of spatial awareness. Applied Ergonomics, 40, 597-607. "
        pdfLink="http://fhsl.eng.buffalo.edu/publications/Bolton2009.pdf"
        sourceLink="http://www.sciencedirect.com/science/article/pii/S0003687008000963"
        source="ScienceDirect">
      </PublicationsView>
      <br />
      <h1 class="text-drexel-blue font-bold text-xl">Peer-reviewed Journal Articles</h1>
      <br />
      <PublicationsView
        citation="Bolton, M.L., Goknur, S., & Bass, E.J. (2014). Framework to support scenario development for human-centered alerting system evaluation. IEEE Transactions on Human-machine Systems, 43(6), 595-606."
        pdfLink="http://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=06636042"
        sourceLink="http://ieeexplore.ieee.org/document/6636042/"
        source="IEEE">
      </PublicationsView>
      <br />
      <PublicationsView
        citation="Bolton, M. L. & Bass, E. J. (2013). Generating erroneous human behavior from strategic knowledge in task models and evaluating its impact on system safety with model checking. IEEE Transactions on Systems, Man and Cybernetics: Systems, 43(6), 1314-1327."
        pdfLink="http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=6519275"
        sourceLink="http://dx.doi.org/10.1109/TSMC.2013.2256129"
        source="IEEE">
      </PublicationsView>
      <br />
      <PublicationsView
        citation="Bolton, M. L., Bass, E. J., & Siminiceanu, R. I. (2013). Using formal verification to evaluate human-automation interaction in safety critical systems, a review. IEEE Transactions on Systems, Man and Cybernetics: Systems, 43(3), 488-503."
        pdfLink="http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=6472094"
        sourceLink="http://ieeexplore.ieee.org/document/6472094/"
        source="IEEE">
      </PublicationsView>
      <br />
      <PublicationsView
        citation="Bolton, M. L., Bass, E. J., & Siminiceanu, R. I. (2012). Generating phenotypical erroneous human behavior to evaluatehumanâ€“automation interaction using model checking. International Journal of Human-Computer Studies, 70(11), 888-906."
        pdfLink="http://fhsl.eng.buffalo.edu/publications/Bolton2012hcs.pdf"
        sourceLink="http://www.sciencedirect.com/science/article/pii/S1071581912000997"
        source="ScienceDirect">
      </PublicationsView>
      <br />
      <PublicationsView
        citation="Bolton, M. L., & Bass, E. J (2012). Using model checking to explore checklist-guided pilot behavior. International Journal of Aviation Psychology. 22 (4), 343-366."
        pdfLink="http://fhsl.eng.buffalo.edu/publications/Bolton2012IJAP.pdf"
        sourceLink="http://www.tandfonline.com/doi/abs/10.1080/10508414.2012.718240"
        source="Taylor & Francis">
      </PublicationsView>
      <br />
      <PublicationsView
        citation="Bolton, M. L., Siminiceanu, R. I., & Bass, E. J. (2011). A systematic approach to model checking human-automation interaction using task analytic models. IEEE Transactions on Systems, Man and Cybernetics, Part A: Systems and Humans, 41(5), 961-976."
        pdfLink="http://fhsl.eng.buffalo.edu/publications/Bolton2011.pdf"
        sourceLink="http://ieeexplore.ieee.org/xpls/abs_all.jsp?arnumber=5735232"
        source="IEEE">
      </PublicationsView>
      <br />
      <PublicationsView
        citation="Bolton, M. L., & Bass, E. J. (2010). Formally verifying human-automation interaction as part of a system model: Limitations and tradeoffs. Innovations in Systems and Software Engineering: A NASA Journal, 6(3), 219-231."
        pdfLink="http://fhsl.eng.buffalo.edu/publications/Bolton2010.pdf"
        sourceLink="http://www.springerlink.com/index/7907432555L51463.pdf"
        source="Springer">
      </PublicationsView>
      <br />
      <PublicationsView
        citation="Bolton, M. L. & Bass, E. J. (2009). Comparing perceptual judgment and subjective measures of spatial awareness. Applied Ergonomics, 40, 597-607."
        pdfLink="http://fhsl.eng.buffalo.edu/publications/Bolton2009.pdf"
        sourceLink="http://www.sciencedirect.com/science/article/pii/S0003687008000963"
        source="ScienceDirect">
      </PublicationsView>
      <br />
      <PublicationsView
        citation="Bolton, M. L. & Bass, E. J. (2008). Using relative position and temporal judgments to identify biases in spatial awareness for synthetic vision systems. International Journal of Aviation Psychology, 18(2), 183-206."
        pdfLink="http://fhsl.eng.buffalo.edu/publications/Bolton2008.pdf"
        sourceLink="http://www.tandfonline.com/doi/abs/10.1080/10508410801926814"
        source="Taylor & Francis">
      </PublicationsView>
      <br />
      <PublicationsView
        citation="Bolton, M. L., Bass, E. J., & Comstock, J. R. (2007). Spatial awareness in synthetic vision systems: Using spatial and temporal judgments to evaluate texture and field of view. Human Factors, 49, 961-974."
        pdfLink="http://fhsl.eng.buffalo.edu/publications/Bolton2007.pdf"
        sourceLink="http://hfs.sagepub.com/content/49/6/961.short"
        source="SAGE">
      </PublicationsView>
      <br />
      <h1 class="text-drexel-blue font-bold text-xl">Peer-reviewed Conference Papers</h1>
      <br />
      <PublicationsView
        citation="Bass, E. J., Brantley, K., Perez, T., Bolton, M. L., Helms, A., Bartel, L. (2013). Information, data entry, and reporting requirements for a resident handoff of care support tool. In Proceedings of the IEEE International Conference on Systems Man and Cybernetics (pp. 675-680). Piscataway: IEEE."
        pdfLink="http://fhsl.eng.buffalo.edu/publications/06721873.pdf"
        sourceLink="http://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=6721873"
        source="IEEE">
      </PublicationsView>
      <br />
      <PublicationsView
        citation="Bolton, M. L., & Bass, E. J. (2013). Evaluating human-human communication protocols with miscommunication generation and model checking. In Proceedings of the Fifth NASA Formal Methods Symposium. Moffett Field: NASA Ames Research Center (pp. 48-62). Moffett Field: NASA Ames Research Center. "
        pdfLink="http://fhsl.eng.buffalo.edu/publications/Bolton2013NFM.pdf"
        sourceLink="http://link.springer.com/chapter/10.1007/978-3-642-38088-4_4"
        source="Springer">
      </PublicationsView>
      <br />
      <PublicationsView
        citation="Bass, E. J., Bolton, M. L., Feigh, K., Griffith, D., Gunter, E., Mansky, W., & Rushby, J. (2011). Toward a multi-method approach to formalizing human-automation interaction and human-human communications. In Proceedings of the IEEE International Conference on Systems Man and Cybernetics (pp. 1817-1824). Piscataway: IEEE."
        pdfLink="http://fhsl.eng.buffalo.edu/publications/Bass2011.pdf"
        sourceLink="http://ieeexplore.ieee.org/xpls/abs_all.jsp?arnumber=6083935&tag=1"
        source="IEEE">
      </PublicationsView>
      <br />
      <PublicationsView
        citation="Bolton, M. L. & Bass, E. J. (2011). Evaluating human-automation interaction using task analytic behavior models, strategic knowledge-based erroneous human behavior generation, and model checking In Proceedings of the IEEE International Conference on Systems Man and Cybernetics (pp. 1788-1794). Piscataway: IEEE."
        pdfLink="http://fhsl.eng.buffalo.edu/publications/Bolton2011SMCConf.pdf"
        sourceLink="http://ieeexplore.ieee.org/xpls/abs_all.jsp?arnumber=6083931"
        source="IEEE">
      </PublicationsView>
      <p class="text-drexel-blue text-xs">* Winner of the Franklin V. Taylor Memorial Award for the Best Conference Paper (out of 612 accepted papers). </p>
      <br />
      <PublicationsView
        citation="Bolton, M. L., & Bass, E. J. (2010). Using task analytic models and phenotypes of erroneous human behavior to discover system failures using model checking. In Proceedings of the 54th Annual Meeting of the Human Factors and Ergonomics Society (pp. 992-996). Santa Monica: Human Factors and Ergonomics Society. "
        pdfLink="http://fhsl.eng.buffalo.edu/publications/Bolton2010hHFESConf.pdf"
        sourceLink="http://pro.sagepub.com/content/54/13/992"
        source="SAGE">
      </PublicationsView>
      <br />
      <PublicationsView
        citation="Bolton, M. L., & Bass, E. J. (2010). Using task analytic models to visualize model checker counterexamples. In Proceedings of the IEEE International Conference on Systems Man and Cybernetics (pp. 2069-2074). Piscataway: IEEE."
        pdfLink="http://fhsl.eng.buffalo.edu/publications/Bolton2010SMCConf.pdf"
        sourceLink="http://ieeexplore.ieee.org/xpls/abs_all.jsp?arnumber=5641711"
        source="IEEE">
      </PublicationsView>
      <br />
      <PublicationsView
        citation="Bolton, M. L., & Bass, E. J. (2009). A method for the formal verification of human interactive systems. In Proceedings of the 53rd Annual Meeting of the Human Factors and Ergonomics Society (pp. 764-768). Santa Monica: Human Factors and Ergonomics Society."
        pdfLink="http://fhsl.eng.buffalo.edu/publications/Bolton2009HFESConf.pdf"
        sourceLink="http://pro.sagepub.com/content/53/12/764"
        source="SAGE">
      </PublicationsView>
      <br />
      <PublicationsView
        citation="Bolton, M. L., & Bass, E. J. (2009). Enhanced operator function model: A generic human task behavior modeling language. In Proceedings of the IEEE International Conference on Systems Man and Cybernetics (pp. 2983-2990). Piscataway: IEEE."
        pdfLink="http://fhsl.eng.buffalo.edu/publications/Bolton2009SMCConf.pdf"
        sourceLink="http://ieeexplore.ieee.org/xpls/abs_all.jsp?arnumber=5346067"
        source="IEEE">
      </PublicationsView>
      <br />
      <PublicationsView
        citation="Bolton, M. L., & Bass, E. J. (2009). Building a formal model of a human-interactive system: Insights into the integration of formal methods and human factors engineering. In Proceedings of the First NASA Formal Methods Symposium (pp. 6-15). Moffett Field: NASA Ames Research Center."
        pdfLink="http://fhsl.eng.buffalo.edu/publications/Bolton2009NFM.pdf"
        sourceLink="http://naca.larc.nasa.gov/search.jsp?R=20100024467&qs=N%3D4294966753%2B4294777596%2B4294898855"
        source="NASA">
      </PublicationsView>
      <p class="text-drexel-blue text-xs">* One of the 7 best papers (out of 22 accepted papers) invited to submit an extended manuscript as a journal article. </p>
      <br />
      <PublicationsView
        citation="Bolton, M. L. & Bass, E. J. (2007). Spatial awareness: Comparing judgment-based and subjective measures. In Proceedings of IEEE the International Conference on Systems Man and Cybernetics (pp. 2582-2587). Piscataway: IEEE."
        pdfLink="http://fhsl.eng.buffalo.edu/publications/Bolton2007SMCConf.pdf"
        sourceLink="http://ieeexplore.ieee.org/xpl/articleDetails.jsp?tp=&arnumber=4413705"
        source="IEEE">
      </PublicationsView>
      <br />
      <PublicationsView
        citation="Bolton, M. L., Bass, E. J., & Comstock, J. R. (2006). Using relative position and temporal judgments to assess the effects of texture and field of view on spatial awareness in synthetic vision systems displays. In Proceedings of the 50th Annual Meeting of the Human Factors and Ergonomics Society (pp. 961-974). Santa Monica: Human Factors and Ergonomics Society."
        pdfLink="http://fhsl.eng.buffalo.edu/publications/Bolton2006HFESConf.pdf"
        sourceLink="http://pro.sagepub.com/content/50/1/71.short"
        source="SAGE">
      </PublicationsView>
      <br />
      <PublicationsView
        citation="Bolton, M. L. & Bass, E. J. (2005). Cognitive Systems Engineering Educational Software (CSEES): Educational software addressing quantitative models of performance. In Proceedings of the IEEE International Conference on Systems Man and Cybernetics (pp. 3380-3386). Piscataway: IEEE."
        pdfLink="http://fhsl.eng.buffalo.edu/publications/Bolton2005SMCConf.pdf"
        sourceLink="http://ieeexplore.ieee.org/xpls/abs_all.jsp?arnumber=1571669"
        source="IEEE">
      </PublicationsView>
      <br />
      <PublicationsView
        citation="Goknur, S., Bolton, M. L., & Bass, E. J. (2004). Adding a motor control component to the Operator Function Model Expert System to investigate air traffic management concepts using simulation. In Proceedings of the IEEE International Conference on Systems Man and Cybernetics (pp. 886-892). Piscataway: IEEE. "
        pdfLink="http://fhsl.eng.buffalo.edu/publications/Goknur2004SMCConf.pdf"
        sourceLink="http://ieeexplore.ieee.org/xpls/abs_all.jsp?arnumber=1398415"
        source="IEEE">
      </PublicationsView>
      <br/>
      <h1 class="text-drexel-blue font-bold text-xl">Other Conference Papers</h1>
      <br />
      <PublicationsView
        citation="Bolton, M. L., Bass, E. J., Siminiceanu, R. I. (2008). Using formal methods to predict human error and system failures. In Proceedings of the Second International Conference on Applied Human Factors and Ergonomics (CD-ROM). Las Vegas: Applied Human Factors and Ergonomics International. "
        pdfLink="http://fhsl.eng.buffalo.edu/publications/Bolton2008AHFEIConf.pdf">
      </PublicationsView>
      <br />
      <PublicationsView
        citation="Bolton, M. L. & Bass, E. J. (2007). Spatial awareness biases in synthetic vision systems displays. In Proceedings of the 14th International Symposium on Aviation Psychology (pp. 63-69). Dayton: Association for Aviation Psychology."
        pdfLink="http://fhsl.eng.buffalo.edu/publications/BoltonISAP.pdf"
        sourceLink="http://www.wright.edu/isap/"
        source="Wright">
      </PublicationsView>
      <br />
      <PublicationsView
        citation="Bolton, M. L., Bass, E. J., & Comstock, J. R. (2006). A toolset to support the development of spatial and temporal judgment experiments for synthetic vision systems. In Proceedings of the IEEE Systems and Information Engineering Design Symposium (pp. 55-60). Piscataway: IEEE."
        pdfLink="http://fhsl.eng.buffalo.edu/publications/Bolton2006SEIDSConf.pdf"
        sourceLink="http://ieeexplore.ieee.org/xpls/abs_all.jsp?arnumber=4055112&tag=1"
        source="IEEE">
      </PublicationsView>
      <br />
      <PublicationsView
        citation="Bolton, M. L., Hagan, T., Kustu, D., LaChance, L., Li, S., & Bass, E. J. (2006). Assessment and enhancement of synthetic vision systems experimentation software. In Proceedings of the IEEE Systems and Information Engineering Design Symposium (pp. 61-66). Piscataway: IEEE."
        pdfLink="http://fhsl.eng.buffalo.edu/publications/Bolton2006SEIDSConf2.pdf"
        sourceLink="http://ieeexplore.ieee.org/xpls/abs_all.jsp?arnumber=4055113"
        source="IEEE">
      </PublicationsView>
      <p class="text-drexel-blue text-xs">* Winner of the best paper award for the Human Computer Interface track.</p>
      <br/>
      <h1 class="text-drexel-blue font-bold text-xl">Peer-reviewed Abstracts</h1>
      <br />
      <p class="text-drexel-blue">
        Bass, E. J., Bolton, M. L., Feigh, K. M., Gunter, E. L., & Rushby, J. (2012). Toward an integrated model checking, theorem proving and simulation framework for analyzing authority and autonomy. In Proceeding of the Workshop on Formal Methods in Human-Machine Interaction (Formal H) (CD-ROM). London: England. 
      </p>
      <br />
      <p class="text-drexel-blue">
        Bolton, M. L. & Bass, E. J. (2012). Model checking human-automation interaction with enhanced operator function model. In Proceeding of the Workshop on Formal Methods in Human-Machine Interaction (Formal H) (CD-ROM). London: England. 
      </p>
      <br />
      <p class="text-drexel-blue">
      Bolton, M. L., & Bass, E. J. (2008). Formal modeling of erroneous human behavior and its implications for model checking. In Proceedings of the Sixth NASA Langley Formal Methods Workshop (pp. 62-64). Hampton: NASA Langley Research Center. 
      </p>
    </div>
  )
}
