listaDesordenada = [2, 4, 3, 5, 6]
print(listaDesordenada)

def ordenar (array) :
  for i in range(len(array)) :
    for j in range(i+1, len(array)) :
      if array[i] > array[j] :
        aux = array[j]
        array[j] = array[i]
        array[i] = aux
  return array

listaOrdenada = ordenar(listaDesordenada)
print(listaOrdenada)

# public class Main
# {
#     static int[] ordenar (int[] array) {
#         for (int i = 0; i < array.length; i++) {
#             for (int j = i+1; j < array.length; j++) {
#                 if (array[i] > array[j]) {
#                     int aux = array[j];
#                     array[j] = array[i];
#                     array[i] = aux;
#                 }
#             }
#         }
#         return array;
#     }
#     public static void main(String[] args) {
        
#     }
# }