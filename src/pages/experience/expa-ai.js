import React from "react";
import ExperienceContainer from "../../components/experience/ExperienceContainer";
import useGetExperience from "../../components/experience/useGetExperience";

export default function ExpaAIPage({ location }) {
  const experience = useGetExperience(location);
  return (
    <>
      <ExperienceContainer location={location}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non dui
        eget turpis ullamcorper condimentum at nec quam. Proin et dolor eget dui
        aliquet tincidunt sit amet maximus tortor. Etiam accumsan enim eu augue
        iaculis iaculis. Donec facilisis mattis diam, vitae mattis nibh
        vulputate et. Nunc ligula nibh, sagittis nec pharetra nec, blandit at
        dolor. Donec eget est massa. Nullam quam ante, elementum ac lacus in,
        pellentesque rhoncus lectus. Duis eu imperdiet quam, eget dapibus ante.
        Mauris suscipit feugiat odio, in tristique quam molestie quis. Nunc
        ipsum tortor, luctus eget dignissim ac, varius a leo. Sed vel iaculis
        ligula. Donec id turpis vel quam consequat pretium. Maecenas sit amet
        lorem urna. Cras et faucibus leo, vel aliquam neque. Aliquam sed ipsum
        lectus. Aliquam dictum urna lacus, vitae pretium velit mollis at. Sed
        finibus felis vitae velit fringilla facilisis. Proin eget tempus lacus,
        sed efficitur massa. Phasellus vulputate lacus sed tincidunt blandit.
        Pellentesque vel dolor fermentum, interdum ante id, vulputate mi. Duis
        id consequat nisl, eget sodales nisi. Mauris erat eros, interdum a
        ultrices a, venenatis et lorem. Vestibulum ut eros non odio gravida
        bibendum. Aliquam nulla enim, tristique eget aliquam vel, tempor vitae
        magna. Pellentesque massa ipsum, ornare in sodales quis, posuere vitae
        ipsum. Aliquam nec suscipit odio. In eget diam at arcu venenatis tempus
        eu quis est. Nunc nec massa nec eros imperdiet laoreet. Nullam volutpat
        lorem eget elit scelerisque consectetur. Aenean vel blandit metus,
        consequat tincidunt risus. Suspendisse ut velit aliquet, dictum dui
        vitae, pharetra velit. Nullam vitae sem a augue faucibus pellentesque
        sit amet vitae diam. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Ut vel tristique ligula.
        Curabitur a orci fermentum, vulputate dolor eget, sagittis orci. Nullam
        enim est, mattis a quam in, pellentesque mollis diam. Fusce porttitor
        sagittis leo, vel condimentum turpis. Quisque rutrum enim leo, vitae
        finibus lectus lobortis non. Praesent luctus mollis aliquet. In at
        elementum arcu. Morbi iaculis nunc fermentum turpis vestibulum auctor.
        Sed condimentum sed purus ut sagittis. Aenean pulvinar eleifend ipsum at
        ornare. Nunc lobortis, diam in tincidunt blandit, tortor ligula
        efficitur lectus, vel tristique orci turpis non massa. Cras gravida
        aliquet quam. In hac habitasse platea dictumst. In hac habitasse platea
        dictumst. Nam ut viverra nulla. Donec posuere id nisi facilisis
        pellentesque. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Phasellus condimentum augue nec
        est pharetra posuere. Praesent eu hendrerit dui. Donec semper finibus
        nibh, et molestie metus pulvinar sit amet. Pellentesque elit lorem,
        semper vel aliquet eu, vestibulum non nulla. Donec at imperdiet justo,
        sit amet pretium leo. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Class aptent taciti sociosqu
        ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla
        ultrices aliquet ullamcorper. Nunc eget magna at dui mollis feugiat sit
        amet vel erat. Duis condimentum mattis metus, non sollicitudin tellus
        consequat id. Aliquam eget justo in elit condimentum condimentum.
        Integer at tempor erat, in lacinia nisi. Pellentesque accumsan ac dui
        eget aliquet. Fusce dignissim ultrices quam, a dictum purus eleifend in.
        Pellentesque malesuada laoreet ex, et dignissim dui pulvinar quis. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Nam non dui eget
        turpis ullamcorper condimentum at nec quam. Proin et dolor eget dui
        aliquet tincidunt sit amet maximus tortor. Etiam accumsan enim eu augue
        iaculis iaculis. Donec facilisis mattis diam, vitae mattis nibh
        vulputate et. Nunc ligula nibh, sagittis nec pharetra nec, blandit at
        dolor. Donec eget est massa. Nullam quam ante, elementum ac lacus in,
        pellentesque rhoncus lectus. Duis eu imperdiet quam, eget dapibus ante.
        Mauris suscipit feugiat odio, in tristique quam molestie quis. Nunc
        ipsum tortor, luctus eget dignissim ac, varius a leo. Sed vel iaculis
        ligula. Donec id turpis vel quam consequat pretium. Maecenas sit amet
        lorem urna. Cras et faucibus leo, vel aliquam neque. Aliquam sed ipsum
        lectus. Aliquam dictum urna lacus, vitae pretium velit mollis at. Sed
        finibus felis vitae velit fringilla facilisis. Proin eget tempus lacus,
        sed efficitur massa. Phasellus vulputate lacus sed tincidunt blandit.
        Pellentesque vel dolor fermentum, interdum ante id, vulputate mi. Duis
        id consequat nisl, eget sodales nisi. Mauris erat eros, interdum a
        ultrices a, venenatis et lorem. Vestibulum ut eros non odio gravida
        bibendum. Aliquam nulla enim, tristique eget aliquam vel, tempor vitae
        magna. Pellentesque massa ipsum, ornare in sodales quis, posuere vitae
        ipsum. Aliquam nec suscipit odio. In eget diam at arcu venenatis tempus
        eu quis est. Nunc nec massa nec eros imperdiet laoreet. Nullam volutpat
        lorem eget elit scelerisque consectetur. Aenean vel blandit metus,
        consequat tincidunt risus. Suspendisse ut velit aliquet, dictum dui
        vitae, pharetra velit. Nullam vitae sem a augue faucibus pellentesque
        sit amet vitae diam. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Ut vel tristique ligula.
        Curabitur a orci fermentum, vulputate dolor eget, sagittis orci. Nullam
        enim est, mattis a quam in, pellentesque mollis diam. Fusce porttitor
        sagittis leo, vel condimentum turpis. Quisque rutrum enim leo, vitae
        finibus lectus lobortis non. Praesent luctus mollis aliquet. In at
        elementum arcu. Morbi iaculis nunc fermentum turpis vestibulum auctor.
        Sed condimentum sed purus ut sagittis. Aenean pulvinar eleifend ipsum at
        ornare. Nunc lobortis, diam in tincidunt blandit, tortor ligula
        efficitur lectus, vel tristique orci turpis non massa. Cras gravida
        aliquet quam. In hac habitasse platea dictumst. In hac habitasse platea
        dictumst. Nam ut viverra nulla. Donec posuere id nisi facilisis
        pellentesque. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Phasellus condimentum augue nec
        est pharetra posuere. Praesent eu hendrerit dui. Donec semper finibus
        nibh, et molestie metus pulvinar sit amet. Pellentesque elit lorem,
        semper vel aliquet eu, vestibulum non nulla. Donec at imperdiet justo,
        sit amet pretium leo. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Class aptent taciti sociosqu
        ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla
        ultrices aliquet ullamcorper. Nunc eget magna at dui mollis feugiat sit
        amet vel erat. Duis condimentum mattis metus, non sollicitudin tellus
        consequat id. Aliquam eget justo in elit condimentum condimentum.
        Integer at tempor erat, in lacinia nisi. Pellentesque accumsan ac dui
        eget aliquet. Fusce dignissim ultrices quam, a dictum purus eleifend in.
        Pellentesque malesuada laoreet ex, et dignissim dui pulvinar quis.
        
      </ExperienceContainer>
    </>
  );
}
